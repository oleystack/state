import * as React from 'react'
import { GET_SELLECTOR_NULL } from './common'
import { compareFunc, compareOneLevelDeepFunc } from './compare'
import { createContext, useContextSelector } from './context'
import {
  ContextListener,
  ContextSelector,
  ContextTuple,
  Provider
} from './types'

function state<Props = {}, Value = undefined>(
  useValue: (props: Props) => Value
): ContextTuple<Props, Value> {
  const contextListeners: ContextListener<Value>[] = []
  const cache: { state?: Readonly<Value>; isMount: boolean } = {
    state: undefined,
    isMount: false
  }
  const context = createContext<Value>(contextListeners, {} as Value)

  const checkIfMount = () => {
    if (!cache.isMount) {
      throw new Error("'State is tried to pull, but without Provider wrapped'")
    }
  }

  /**
   * State Provider
   * @returns React.FC
   */
  const BindProvider: Provider<Props> = ({ children, ...props }) => {
    const value = useValue(props as Props)
    cache.state = value
    cache.isMount = true

    return React.createElement(context.Provider, { value }, children)
  }

  /**
   * Context selector hook
   * @param selector State Selector
   * @returns Substate
   */
  const useBindContextSelector = <SelectedValue>(
    selector?: ContextSelector<Value, SelectedValue>
  ) => useContextSelector(context, selector)

  /**
   * Static state getter
   * @param selector  State Selector
   * @returns Substate
   */
  const getState = <SelectedValue>(
    selector: ContextSelector<Value, SelectedValue> = GET_SELLECTOR_NULL<
      Value,
      SelectedValue
    >()
  ) => {
    checkIfMount()

    return selector(cache.state!)
  }

  /**
   * Subscriber for non-hook aproaches
   * @param eventListeners List of subscribed events
   * @returns Subscriber with unsubscribe method
   */
  const subscribe = <SelectedValue>(
    listener: (state: SelectedValue) => void,
    selector: ContextSelector<Value, SelectedValue> = GET_SELLECTOR_NULL<
      Value,
      SelectedValue
    >()
  ) => {
    checkIfMount()

    const { current: cachedSelectedState }: { current: SelectedValue } = {
      current: selector(cache.state!)
    }

    const subscriber: ContextListener<Value> = (payload) => {
      const [, nextState] = payload
      const nextSelectedState = selector(nextState)

      // eslint-disable-next-line no-self-compare
      const isCreatedOnFly = nextSelectedState !== selector(nextState)
      const isEqual = isCreatedOnFly ? compareOneLevelDeepFunc : compareFunc

      if (isEqual(cachedSelectedState, nextSelectedState)) {
        listener(nextSelectedState)
      }
    }

    contextListeners.push(subscriber)

    /**
     * Unsubscribe state
     */
    const unsubscribe = () => {
      const index = contextListeners.indexOf(subscriber)
      contextListeners.splice(index, 1)
    }

    return { unsubscribe }
  }

  return [BindProvider, useBindContextSelector, { getState, subscribe }]
}

export default state

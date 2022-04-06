import * as React from 'react'
import { GET_SELLECTOR_NULL, isSelectorObjectCreatedOnFly } from './common'
import { compareFunc, compareOneLevelDeepFunc } from './compare'
import { createContext, useContextSelector } from './context'
import { ContextListener, StateSelector, Provider, StateTuple } from './types'

function state<Props = {}, State = undefined>(
  useValue: (props: Props) => State
): StateTuple<Props, State> {
  const contextListeners: ContextListener<State>[] = []
  const cache: { state?: Readonly<State>; isMount: boolean } = {
    state: undefined,
    isMount: false
  }
  const context = createContext<State>(contextListeners, {} as State)

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
  const useBindContextSelector = <SelectedState>(
    selector?: StateSelector<State, SelectedState>
  ) => useContextSelector(context, selector)

  /**
   * Static state getter
   * @param selector  State Selector
   * @returns Substate
   */
  const getState = <SelectedState>(
    selector: StateSelector<State, SelectedState> = GET_SELLECTOR_NULL<
      State,
      SelectedState
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
  const subscribe = <SelectedState = State>(
    listener: (state: SelectedState) => void,
    selector: StateSelector<State, SelectedState> = GET_SELLECTOR_NULL<
      State,
      SelectedState
    >()
  ) => {
    checkIfMount()

    const { current: cachedSelectedState }: { current: SelectedState } = {
      current: selector(cache.state!)
    }

    const subscriber: ContextListener<State> = (payload) => {
      const [, nextState] = payload

      const isObjCreatedOnFly = isSelectorObjectCreatedOnFly(selector)
      const nextSelectedState = selector(nextState)
      const isEqual = isObjCreatedOnFly ? compareOneLevelDeepFunc : compareFunc

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

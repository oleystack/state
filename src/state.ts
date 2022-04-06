import * as React from 'react'
import { GET_SELLECTOR_NULL, isSelectorObjectCreatedOnFly } from './common'
import { compareFunc, compareOneLevelDeepFunc } from './compare'
import { createContext, useContextSelector } from './context'
import { ContextListener, StateSelector, Provider, StateTuple } from './types'

function state<Props = {}, State = undefined>(
  useValue: (props: Props) => State
): StateTuple<Props, State> {
  const contextListeners: ContextListener<State>[] = []
  const cache: { state: Readonly<State> | undefined } = {
    state: undefined
  }
  const context = createContext<State>(contextListeners, {} as State)

  /**
   * State Provider
   * @returns React.FC
   */
  const StateProvider: Provider<Props> = ({ children, ...props }) => {
    const value = useValue(props as Props)
    cache.state = value

    return React.createElement(context.Provider, { value }, children)
  }

  /**
   * Context selector hook
   * @param selector State Selector
   * @returns Substate
   */
  const useStateSelector = <SelectedState = State>(
    selector?: StateSelector<State, SelectedState>
  ) => useContextSelector(context, selector)

  /**
   * Static state getter
   * @param selector  State Selector
   * @returns Substate
   */
  const getState = <SelectedState = State>(
    selector: StateSelector<State, SelectedState> = GET_SELLECTOR_NULL<
      State,
      SelectedState
    >()
  ) => {
    return cache.state ? selector(cache.state) : undefined
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
    const {
      current: cachedSelectedState
    }: { current: SelectedState | undefined } = {
      current: cache.state ? selector(cache.state) : undefined
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

  return [StateProvider, useStateSelector, { getState, subscribe }]
}

export default state

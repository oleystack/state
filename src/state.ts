import * as React from 'react'
import { GET_SELLECTOR_NULL, isSelectorObjectCreatedOnFly } from './common'
import { compareFunc, compareOneLevelDeepFunc } from './compare'
import { createContext, useContextSelector } from './context'
import { ContextListener, StateSelector } from './types'

type StateSelectorHook<State> = (<SelectedState>(
  selector: StateSelector<State, SelectedState>
) => SelectedState) &
  (() => State)

type StateSubscriber<State> = (listener: (state: State) => void) => {
  unsubscribe: () => void
}

type StateStore<State> = {
  get: () => State | undefined
  select: <SelectedState>(
    selector: StateSelector<State, SelectedState>
  ) => StateStore<SelectedState>
  subscribe: StateSubscriber<State>
}

type StateTuple<Props, State> = [
  React.FC<Props & { children?: React.ReactNode | undefined }>,
  StateSelectorHook<State>,
  StateStore<State>
]

function state<Props = {}, State = undefined>(
  useValue: (props: Props) => State
): StateTuple<Props, State> {
  const contextListeners: ContextListener<State>[] = []

  type Cache = { state: Readonly<State> | undefined }
  const cache: Cache = {
    state: undefined
  }

  const context = createContext<State>(contextListeners, {} as State)

  /**
   * State Provider
   * @returns React.FC
   */
  const StateProvider: React.FC<
    Props & { children?: React.ReactNode | undefined }
  > = ({ children, ...props }) => {
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
    selector: StateSelector<State, SelectedState> = GET_SELLECTOR_NULL<
      State,
      SelectedState
    >()
  ) => useContextSelector(context, selector)

  /**
   * Helper for creating recuring static state
   * @param selector State selector
   * @returns StateStatic
   */
  const createStatic = <SelectedState>(
    selector: StateSelector<State, SelectedState>
  ): StateStore<SelectedState> => {
    /**
     * Returns current state
     * @returns Current state
     */
    const get = () => {
      return cache.state !== undefined ? selector(cache.state) : undefined
    }

    /**
     * Select substate
     * @param nextSelector
     * @returns Selected StateStatic
     */
    const select = <NextSelectedState>(
      nextSelector: StateSelector<SelectedState, NextSelectedState>
    ) => createStatic((state) => nextSelector(selector(state)))

    /**
     * Listen on state changes
     * @param listener
     * @returns Subscription object
     */
    const subscribe = (listener: (state: Readonly<SelectedState>) => void) => {
      type Cache = { current: SelectedState | undefined }
      const subscriberCache: Cache = {
        current: cache.state !== undefined ? selector(cache.state) : undefined
      }

      const isEqual = isSelectorObjectCreatedOnFly(selector)
        ? compareOneLevelDeepFunc
        : compareFunc

      const subscriber: ContextListener<State> = (payload) => {
        const [, nextState] = payload
        const nextSelectedState = selector(nextState)

        if (!isEqual(subscriberCache.current, nextSelectedState)) {
          subscriberCache.current = nextSelectedState
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

    return { get, select, subscribe }
  }

  /**
   * Init static recuring store
   */
  const staticState = createStatic(GET_SELLECTOR_NULL<State, State>())

  return [StateProvider, useStateSelector, staticState]
}

export default state

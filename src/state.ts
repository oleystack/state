import * as React from 'react'
import { GET_SELLECTOR_NULL } from './common'
import { createContext, useContextSelector } from './context'
import { ContextSelector, ContextTuple, Provider } from './types'

function state<Props = {}, Value = undefined>(
  useValue: (props: Props) => Value
): ContextTuple<Props, Value> {
  // const listeners = {
  //   current: []
  // }
  const cache: { state?: Readonly<Value>; isMount: boolean } = {
    state: undefined,
    isMount: false
  }
  const context = createContext<Value>({} as Value)

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
    if (!cache.isMount) {
      throw new Error("'State is tried to pull, but without Provider wrapped'")
    }
    return selector(cache.state!)
  }

  return [BindProvider, useBindContextSelector, { getState }]
}

export default state

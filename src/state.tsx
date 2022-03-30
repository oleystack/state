import * as React from 'react'
import { createContext, useContextSelector } from './context'
import { ContextSelector, ContextTuple, Provider } from './types'

function state<Props, Value = undefined>(
  useValue: (props: Props) => Value
): ContextTuple<Props, Value> {
  const context = createContext<Value>({} as Value)

  const Provider: Provider<Props> = ({ children, ...props }) => {
    const value = useValue(props as Props)
    return <context.Provider value={value}>{children}</context.Provider>
  }

  const useBindContextSelector = <SelectedValue,>(
    selector?: ContextSelector<Value, SelectedValue>
  ) => useContextSelector(context, selector)

  return [Provider, useBindContextSelector]
}

export default state

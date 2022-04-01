import * as React from 'react'
import { createContext, useContextSelector } from './context'
import { ContextSelector, ContextTuple, Provider } from './types'

function state<Props, Value = undefined>(
  useValue: (props: Props) => Value
): ContextTuple<Props, Value> {
  const context = createContext<Value>({} as Value)

  const BindProvider: Provider<Props> = ({ children, ...props }) => {
    const value = useValue(props as Props)
    return React.createElement(context.Provider, { value }, children)
  }

  const useBindContextSelector = <SelectedValue>(
    selector?: ContextSelector<Value, SelectedValue>
  ) => useContextSelector(context, selector)

  return [BindProvider, useBindContextSelector]
}

export default state

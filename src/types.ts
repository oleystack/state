import * as React from 'react'

export type ContextVersion = number

export type ContextSelector<Value, SelectedValue> = (
  value: Value
) => SelectedValue

export type Provider<Props> = React.FC<Props>

export type ContextSelectorHook<Value> = (<SelectedValue>(
  selector: ContextSelector<Value, SelectedValue>
) => SelectedValue) &
  (() => Value)

export type ContextTuple<Props, Value> = [
  Provider<Props>,
  ContextSelectorHook<Value>
]

export type Context<Value> = React.Context<Value> & {
  Provider: Provider<React.ProviderProps<Value>>
  // We don't support Consumer API
  Consumer: never
}

export type ContextValue<Value> = {
  /** Holds a set of subscribers from components. */
  listeners: ((payload: readonly [ContextVersion, Value]) => void)[]

  /** Holds an actual value of React's context that will be propagated down for computations. */
  value: React.MutableRefObject<Value>

  /** A version field is used to sync a context value and consumers. */
  version: React.MutableRefObject<ContextVersion>
}

export type ContextReducer<Value, SelectedValue> = React.Reducer<
  readonly [Value, SelectedValue],
  undefined | readonly [ContextVersion, Value]
>

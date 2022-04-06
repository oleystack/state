import * as React from 'react'

export type StateSelector<State, SelectedState> = (
  state: Readonly<State>
) => SelectedState

export type Provider<Props> = React.FC<Props>

export type StateSelectorHook<State> = (<SelectedState>(
  selector: StateSelector<State, SelectedState>
) => Readonly<SelectedState>) &
  (() => Readonly<State>)

export type StateSubscriber<State> = (listener: (state: State) => void) => {
  unsubscribe: () => void
}

export type StateStore<State> = {
  get: () => State | undefined
  select: <SelectedState>(
    selector: StateSelector<State, SelectedState>
  ) => StateStore<SelectedState>
  subscribe: StateSubscriber<State>
}

export type StateTuple<Props, State> = [
  Provider<Props>,
  StateSelectorHook<State>,
  StateStore<State>
]

export type ContextVersion = number

export type ContextListener<Value> = (
  payload: readonly [ContextVersion, Value]
) => void

export type Context<Value> = React.Context<Value> & {
  Provider: Provider<React.ProviderProps<Value>>
  // We don't support Consumer API
  Consumer: never
}

export type ContextValue<Value> = {
  /** Holds a set of subscribers from components. */
  listeners: ContextListener<Value>[]

  /** Holds an actual value of React's context that will be propagated down for computations. */
  value: React.MutableRefObject<Value>

  /** A version field is used to sync a context value and consumers. */
  version: React.MutableRefObject<ContextVersion>
}

export type ContextReducer<Value, SelectedValue> = React.Reducer<
  readonly [Value, SelectedValue],
  undefined | readonly [ContextVersion, Value]
>

import * as React from 'react'

export type StateSelector<State, SelectedState> = (
  state: Readonly<State>
) => SelectedState

export type Provider<Props> = React.FC<Props>

export type StateSelectorHook<State> = (<SelectedState>(
  selector: StateSelector<State, SelectedState>
) => Readonly<SelectedState>) &
  (() => Readonly<State>)

export type StateSelectorStatic<State> = (<SelectedState>(
  selector: StateSelector<State, SelectedState>
) => Readonly<SelectedState> | undefined) &
  (() => Readonly<State> | undefined)

export type StateSubscriber<State> = (<SelectedState>(
  listener: (state: SelectedState) => void,
  selector?: StateSelector<State, SelectedState>
) => {
  unsubscribe: () => void
}) &
  ((listener: (state: State) => void) => {
    unsubscribe: () => void
  })

export type StateTuple<Props, State> = [
  Provider<Props>,
  StateSelectorHook<State>,
  {
    getState: StateSelectorStatic<State>
    subscribe: StateSubscriber<State>
  }
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

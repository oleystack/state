export type StateSelector<State, SelectedState> = (
  state: Readonly<State>
) => SelectedState

export type ContextVersion = number

export type ContextListener<Value> = (
  payload: readonly [ContextVersion, Value]
) => void

import { trap } from './trap'
import { StateSelector } from './types'

export const isDev = process.env.NODE_ENV !== 'production'

export const canUseDOM = (): boolean =>
  typeof window !== 'undefined' &&
  !!(window.document && window.document.createElement)

export const GET_SELLECTOR_NULL =
  <Value, SelectedValue>() =>
  (state: Value) =>
    state as unknown as SelectedValue

// Todo: test
export const isSelectorObjectCreatedOnFly = <Value, SelectedValue>(
  selector: StateSelector<Value, SelectedValue>
) => {
  const obj = trap as Value

  // eslint-disable-next-line no-self-compare
  return selector(obj) !== selector(obj)
}

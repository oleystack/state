export const isDev = process.env.NODE_ENV !== 'production'

export const canUseDOM = (): boolean =>
  typeof window !== 'undefined' &&
  !!(window.document && window.document.createElement)

export const GET_SELLECTOR_NULL =
  <Value, SelectedValue>() =>
  (state: Value) =>
    state as unknown as SelectedValue

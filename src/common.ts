export const isDev = process.env.NODE_ENV !== 'production'

export const canUseDOM = (): boolean =>
  typeof window !== 'undefined' &&
  !!(window.document && window.document.createElement)

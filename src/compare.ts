/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function is(x: any, y: any) {
  return (
    (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y) // eslint-disable-line no-self-compare
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const objectIs: (x: any, y: any) => boolean =
  // @ts-ignore fallback to native if it exists (not in IE11)
  typeof Object.is === 'function' ? Object.is : is

const isObject = (value: any): boolean => typeof value === 'object' && !!value

// One level deep
const isEqualArray = <T>(x: T[], y: T[]): boolean => {
  if (x.length !== y.length) {
    return false
  }

  for (let i = 0; i < x.length; i++) {
    if (!objectIs(x[i], y[i])) {
      return false
    }
  }

  return true
}

const isEqual = (x: any, y: any): boolean => {
  if (Array.isArray(x) && Array.isArray(y)) {
    return isEqualArray(x, y)
  }

  if (isObject(x) && isObject(y)) {
    // Have the same keys
    if (!isEqualArray(Object.keys(x), Object.keys(y))) {
      return false
    }

    // Have the same values
    if (!isEqualArray(Object.values(x), Object.values(y))) {
      return false
    }

    return true
  }

  return objectIs(x, y)
}

export const compareFunc = isEqual

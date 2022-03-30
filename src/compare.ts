/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
/* istanbul ignore next */
function is(x: any, y: any) {
  return (
    (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y) // eslint-disable-line no-self-compare
  )
}

const objectIs: (x: any, y: any) => boolean =
  typeof Object.is === 'function' ? Object.is : is

const isObject = (value: any): boolean => typeof value === 'object' && !!value

// One level deep
const isEqualArray = <A, B>(x: A[], y: B[]): boolean => {
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

const isEqualOneLevelDeep = (x: any, y: any): boolean => {
  if (x === y) {
    return true
  }

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

export const compareOneLevelDeepFunc = isEqualOneLevelDeep
export const compareFunc = objectIs

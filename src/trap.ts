export const trap: any = (() => {
  class Trap extends Function {
    constructor() {
      super()
      return new Proxy(this, {
        construct() {
          return trap
        },
        get(target, propertyName) {
          return target[propertyName] ?? trap
        },
        getOwnPropertyDescriptor() {
          return {
            writable: false,
            configurable: true,
            enumerable: true,
            value: trap
          }
        },
        getPrototypeOf() {
          return trap
        },

        has() {
          return false
        },
        isExtensible() {
          return false
        },
        ownKeys() {
          return []
        },
        apply: () => trap
      })
    }

    _call() {
      return trap
    }

    valueOf() {
      return 0
    }

    toString() {
      return `It's a trap!`
    }

    toInteger() {
      return 0
    }

    [Symbol.toPrimitive](hint: string) {
      if (hint === 'number') {
        return 0
      }
      if (hint === 'string') {
        return `It's a trap!`
      }
      return false
    }
  }

  return new Trap()
})()

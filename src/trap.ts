class Trap extends Function {
  constructor() {
    super()
    return new Proxy(this, {
      construct() {
        return new Trap()
      },
      get(target, propertyName) {
        return target[propertyName] ?? new Trap()
      },
      getOwnPropertyDescriptor() {
        return {
          writable: false,
          configurable: true,
          enumerable: true,
          value: new Trap()
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
      apply: () => new Trap()
    })
  }

  _call() {
    return new Trap()
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

export const trap: any = new Trap()

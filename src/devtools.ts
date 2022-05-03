import { useEffect, useRef } from 'react'
import type {} from '@redux-devtools/extension'
import { compareOneLevelDeepFunc } from './compare'

interface Action<State, Props, Payload = unknown> {
  type: string
  payload?: Payload
  state?: State
  props?: Props
}

interface DevTools<State = unknown, Props = unknown> {
  init: (state: State) => void
  send: (action: Action<State, Props>, state: State) => void
  subscribe: (
    listener: (message: Action<State, Props>) => void
  ) => (() => void) | undefined
}

let devTools: DevTools | null = null

const areDevToolsEnabled =
  process.env.NODE_ENV === 'development' &&
  typeof window !== 'undefined' &&
  Boolean(window.__REDUX_DEVTOOLS_EXTENSION__)

const startDevTools = () => {
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__?.connect({
    name: '@bit-about/state'
  }) as DevTools
}

export const useDevTools = <State, Props>(
  useValue: (props: Props) => State,
  props: Props
): State => {
  const state = useValue(props)
  if (!areDevToolsEnabled) {
    return state
  }

  useEffect(() => {
    startDevTools()
    devTools?.init(state)
  }, [])

  const cacheProps = useRef<Props>(props)
  const cacheState = useRef<State>(state)
  const cacheAction = useRef<Action<State, Props>>()

  // Props updates
  if (!compareOneLevelDeepFunc(cacheProps.current, props)) {
    devTools?.send(
      { type: '@@PARENT_PROPS_UPDATE', payload: props },
      cacheState.current
    )

    cacheProps.current = props
  }

  // State updates
  if (!compareOneLevelDeepFunc(cacheState.current, state)) {
    if (cacheAction.current !== undefined) {
      devTools?.send(cacheAction.current, state)
      cacheAction.current = undefined
    }

    cacheState.current = state
  }

  const wrappFunction = (fn: Function, name?: string) => {
    return (...args: unknown[]) => {
      console.log('args', args)

      cacheAction.current = {
        type: name ? `CALL/${name}` : 'CALL',
        payload: args.map((arg) => {
          if (typeof arg === 'function') {
            return `@FUNCTION: ${String(arg)}`
          }

          return arg
        }),
        state: cacheState.current,
        props: cacheProps.current
      }
      return fn(...args)
    }
  }

  if (typeof cacheState.current === 'function') {
    return wrappFunction(
      cacheState.current as unknown as Function
    ) as unknown as State
  }

  if (Array.isArray(cacheState.current)) {
    return cacheState.current.map((element, index) =>
      typeof element === 'function'
        ? wrappFunction(element, index.toString())
        : element
    ) as unknown as State
  }

  if (typeof cacheState.current === 'object') {
    return Object.entries(cacheState.current).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: typeof value === 'function' ? wrappFunction(value, key) : value
      }),
      {}
    ) as unknown as State
  }

  return cacheState.current
}

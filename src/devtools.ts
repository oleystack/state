import { useEffect, useRef, useState } from 'react'
import type {} from '@redux-devtools/extension'
import { compareOneLevelDeepFunc } from './compare'

interface Action<State, Props, Payload = unknown> {
  type: string
  payload?: Payload
  state?: State
  props?: Props
}

type Entry<Props, State> = { props: Props; state: State }

interface DevTools<State = unknown, Props = unknown> {
  init: (state: State) => void
  send: (action: Action<State, Props>, state: State) => void
  subscribe: (
    listener: (
      message: Action<State, Props, { type: string; actionId: number }>
    ) => void
  ) => (() => void) | undefined
}

const toReadable = (arg: unknown) => {
  if (typeof arg === 'function') {
    return `@FUNCTION`
  }

  return arg
}

const objToReadable = (obj: any) => {
  if (Array.isArray(obj)) {
    return obj.map((value) => toReadable(value))
  }

  return Object.entries(obj).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: toReadable(value) }),
    {}
  )
}

let devTools: DevTools | null = null

const areDevToolsEnabled =
  process.env.NODE_ENV === 'development' &&
  typeof window !== 'undefined' &&
  Boolean(window.__REDUX_DEVTOOLS_EXTENSION__)

const startDevTools = () => {
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__?.connect({
    name: '@bit-about/state'
  }) as unknown as DevTools
}

// todo: multiple store
export const useDevTools = <State, Props>(
  useValue: (props: Props) => State,
  props: Props
): State => {
  const state = useValue(props)
  if (!areDevToolsEnabled) {
    return state
  }

  const isRecording = useRef<boolean>(true)
  const [activeActionId, setActiveActionId] = useState<{ current: number }>({
    current: 0
  })
  const lastActionId = useRef<number>(0)
  const lastAction = useRef<Action<State, Props>>()

  const archive = useRef<Record<number, Entry<Props, State>>>({
    0: { props, state }
  })

  const lastEntry = archive.current[lastActionId.current]
  const isLastEntry = activeActionId.current === lastActionId.current

  useEffect(() => {
    startDevTools()
    devTools?.init(state)

    const unsubscribe = devTools?.subscribe((action) => {
      console.log(action)
      switch (action.type) {
        case 'ACTION':
          if (typeof action.payload !== 'string') {
            console.error(
              '[@bit-about/state devtools] Unsupported action format'
            )
          }

          // Todo parse
          break

        case 'DISPATCH':
          switch (action.payload?.type) {
            case 'COMMIT':
            case 'RESET':
              devTools?.init(state)
              archive.current = { 0: { state, props } }
              lastActionId.current = 0
              setActiveActionId({ current: 0 })
              break

            case 'ROLLBACK':
              // todo
              break

            case 'JUMP_TO_STATE':
            case 'JUMP_TO_ACTION':
              setActiveActionId({ current: action.payload.actionId })
              break

            case 'IMPORT_STATE':
              // todo
              break

            case 'PAUSE_RECORDING':
              isRecording.current = !isRecording.current
              break
          }
      }
    })

    return () => {
      unsubscribe?.()
    }
  }, [])

  const sendToDevTools = (
    action: Action<State, Props>,
    state: State,
    entry: Entry<Props, State>
  ) => {
    devTools?.send(
      {
        ...action,
        payload:
          action.payload !== undefined
            ? objToReadable(action.payload)
            : undefined
      },
      objToReadable(state)
    )

    archive.current[++lastActionId.current] = entry

    if (isLastEntry) {
      activeActionId.current = lastActionId.current
    }
  }

  // Props updates
  if (!compareOneLevelDeepFunc(lastEntry.props, props)) {
    sendToDevTools(
      { type: 'PARENT_PROPS_UPDATE', payload: props },
      lastEntry.state,
      {
        props,
        state: lastEntry.state
      }
    )
  }

  // State updates
  if (!compareOneLevelDeepFunc(lastEntry.state, state)) {
    sendToDevTools(
      lastAction.current !== undefined
        ? lastAction.current
        : { type: 'SIDE_EFFECT' },
      state,
      {
        props: lastEntry.props,
        state
      }
    )

    lastAction.current = undefined
  }

  const wrappFunction = (fn: Function, name?: string) => {
    return (...args: unknown[]) => {
      lastAction.current = {
        type: name ? `CALL/${name}` : 'CALL',
        payload: args.map(toReadable),
        ...lastEntry
      }
      return fn(...args)
    }
  }

  const activeEntry = archive.current[activeActionId.current]

  // todo test
  if (typeof activeEntry.state === 'function') {
    return wrappFunction(
      activeEntry.state as unknown as Function
    ) as unknown as State
  }

  // todo test
  if (Array.isArray(activeEntry.state)) {
    return activeEntry.state.map((element, index) =>
      typeof element === 'function'
        ? wrappFunction(element, `ELEMENT_${index}`)
        : element
    ) as unknown as State
  }

  if (typeof activeEntry.state === 'object') {
    return Object.entries(activeEntry.state).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: typeof value === 'function' ? wrappFunction(value, key) : value
      }),
      {}
    ) as unknown as State
  }

  return activeEntry.state
}

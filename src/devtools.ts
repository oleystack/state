/* istanbul ignore file */

import { createContext, useContext, useEffect, useRef, useState } from 'react'
import type {} from '@redux-devtools/extension'
import { compareOneLevelDeepFunc } from './compare'

/**
 * DevTools types
 */

interface ActionParentPropsUpdate<Props = unknown> {
  type: 'PARENT_PROPS_UPDATE'
  props: Props
}

interface ActionCall<Payload = unknown> {
  type: 'ACTION' | `ACTION/${string}`
  payload: Payload
}

interface ActionSideEffect {
  type: 'SIDE_EFFECT' | `SIDE_EFFECT/${string}`
}

interface ActionJump {
  type: '@@JUMP'
}

interface ActionReset {
  type: '@@RESET'
}

type Action =
  | ActionParentPropsUpdate
  | ActionCall
  | ActionSideEffect
  | ActionJump
  | ActionReset

type ActionArchiveEntry<State, Props> = {
  state: State
  props: Props
}

/**
 * Context
 */

interface DevTools<State> {
  init: (state: State) => void
  send: (action: Action, state: State) => void
  subscribe: (
    listener: (message: {
      type: string
      payload: { type: string; actionId: number }
    }) => void
  ) => (() => void) | undefined
}

interface DevToolsContextValue {
  name: { current: string }
  actionsQueue: { current: Action[] }
}
export const devToolsDefaultValue: DevToolsContextValue = {
  name: { current: '@bit-about/state' },
  actionsQueue: { current: [] }
}
export const DevToolsContext =
  createContext<DevToolsContextValue>(devToolsDefaultValue)

export const useSideEffect = <Arguments extends any[], ReturnType>(
  fn: (...args: Arguments) => ReturnType,
  id: string
) => {
  const { actionsQueue } = useContext(DevToolsContext)

  return (...args: Arguments): ReturnType => {
    actionsQueue.current.push({
      type: `ACTION/${id}`,
      payload: args
    })

    return fn(...args)
  }
}

export const useStoreName = (name: string) => {
  const { name: storeName } = useContext(DevToolsContext)
  storeName.current = name
}

/**
 * useDevTools
 */

const areDevToolsEnabled =
  process.env.NODE_ENV === 'development' &&
  typeof window !== 'undefined' &&
  Boolean(window.__REDUX_DEVTOOLS_EXTENSION__)

export const useDevTools = <State, Props>(
  state: State,
  props: Props
): State => {
  if (!areDevToolsEnabled) {
    return state
  }

  const devTools = useRef<DevTools<State>>()
  const isMounted = useRef<boolean>(false)
  const isRecording = useRef<boolean>(true)
  const {
    name: { current: name },
    actionsQueue
  } = useContext(DevToolsContext)
  const [activeActionId, setActiveActionId] = useState({
    current: 0
  })
  const archive = useRef<Record<number, ActionArchiveEntry<State, Props>>>({
    0: { state, props } // @@INIT
  })
  const lastActionId = Object.keys(archive.current)
    .map(Number)
    .sort((a, b) => b - a)[0]
  const lastEntry = archive.current[lastActionId]

  // Initialization
  useEffect(() => {
    if (devTools.current) {
      return
    }

    devTools.current = window.__REDUX_DEVTOOLS_EXTENSION__?.connect({
      name
    }) as unknown as DevTools<State>

    devTools.current?.init(state)

    const unsubscribe = devTools.current?.subscribe((message) => {
      console.log(message)
      switch (message.type) {
        case 'ACTION':
          if (typeof message.payload !== 'string') {
            console.error(
              '[@bit-about/state devtools] Unsupported action format'
            )
          }

          // Todo parse
          break

        case 'DISPATCH':
          switch (message.payload.type) {
            case 'COMMIT':
            case 'RESET':
              devTools.current?.init(state)
              archive.current = { 0: { state, props } }
              actionsQueue.current.push({
                type: '@@RESET'
              })
              setActiveActionId({ current: 0 })
              break

            case 'ROLLBACK':
              console.error(
                '[@bit-about/state devtools] Sorry, but rollback action is unsupported.'
              )
              break

            case 'JUMP_TO_STATE':
            case 'JUMP_TO_ACTION':
              actionsQueue.current.push({
                type: '@@JUMP'
              })
              setActiveActionId({ current: message.payload.actionId })
              break

            case 'IMPORT_STATE':
              // todo
              break

            case 'REORDER_ACTION':
              console.error(
                '[@bit-about/state devtools] Sorry, but reorder action is unsupported.'
              )
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

  // Detecting parent props update
  if (!compareOneLevelDeepFunc(lastEntry.props, props)) {
    actionsQueue.current.push({
      type: 'PARENT_PROPS_UPDATE',
      props
    })
  }

  // Actions dispatcher
  do {
    if (!isMounted.current) {
      isMounted.current = true
      break
    }

    if (!isRecording.current) {
      actionsQueue.current = []
      break
    }

    let [action] = actionsQueue.current

    // Ignoring system actions
    if (['@@RESET', '@@JUMP'].includes(action?.type)) {
      actionsQueue.current.shift()
      continue
    }

    // Detect if it's normal parent rerender of unexpected change (side effect)
    // Props are checking above
    if (!action && !compareOneLevelDeepFunc(lastEntry.state, state)) {
      action = { type: 'SIDE_EFFECT' }
    }

    if (!action) {
      break
    }

    devTools.current?.send(action, state)
    archive.current[lastActionId + 1] = { state, props }
    actionsQueue.current.shift()

    // Moving to the newest one
    // If active was last
    if (activeActionId.current === lastActionId) {
      activeActionId.current = lastActionId + 1
    }
  } while (actionsQueue.current.length)

  /**
   * AUTO wrapping all returning functions as side effects
   */

  const activeEntry = archive.current[activeActionId.current]

  // when state is a function
  const wrappFunction = <T>(fn: T, id: string): T =>
    useSideEffect(
      fn as unknown as (...args: unknown[]) => unknown,
      id
    ) as unknown as T

  if (typeof activeEntry.state === 'function') {
    return wrappFunction(activeEntry.state, 'SELF')
  }

  // when state is an array
  if (Array.isArray(activeEntry.state)) {
    return activeEntry.state.map((element, index) =>
      typeof element === 'function'
        ? wrappFunction(element, `ELEMENT_${index}`)
        : element
    ) as unknown as State
  }

  // when state is an object
  if (typeof activeEntry.state === 'object') {
    return Object.entries(activeEntry.state).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: typeof value === 'function' ? wrappFunction(value, key) : value
      }),
      {}
    ) as State
  }

  return activeEntry.state
}

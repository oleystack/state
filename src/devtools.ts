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

type Action = ActionParentPropsUpdate | ActionCall | ActionSideEffect

type ActionArchiveEntry<State, Props> = { state: State; props: Props }

/**
 * Context
 */

interface DevTools<State = unknown> {
  init: (state: State) => void
  send: (action: Action, state: State) => void
  subscribe: (
    listener: (
      message: Action & { payload: { type: string; actionId: number } }
    ) => void
  ) => (() => void) | undefined
}

interface DevToolsContextValue {
  name: string
  actionsQueue: { current: Action[] }
}
export const devToolsDefaultValue: DevToolsContextValue = {
  name: '@bit-about/state',
  actionsQueue: { current: [] }
}
export const DevToolsContext =
  createContext<DevToolsContextValue>(devToolsDefaultValue)

export const useSideEffect = <Argument, ReturnType>(
  fn: (...args: Argument[]) => ReturnType,
  id: string
) => {
  const { actionsQueue } = useContext(DevToolsContext)

  return (...args: Argument[]): ReturnType => {
    const action: ActionCall = {
      type: `ACTION/${id}`,
      payload: args
    }
    actionsQueue.current.push(action)

    return fn(...args)
  }
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

  // const isMounted = useRef<boolean>(false)
  const devTools = useRef<DevTools>()
  // const isRecording = useRef<boolean>(true)
  const { name, actionsQueue } = useContext(DevToolsContext)

  const [activeActionId] = useState({
    current: 0
  })
  const archive = useRef<Record<number, ActionArchiveEntry<State, Props>>>({
    0: { state, props } // @@INIT
  })

  const lastActionId = Object.keys(archive.current)
    .map(Number)
    .sort()
    .reverse()[0]
  const lastEntry = archive.current[lastActionId]

  useEffect(() => {
    devTools.current = window.__REDUX_DEVTOOLS_EXTENSION__?.connect({
      name
    }) as unknown as DevTools

    devTools.current?.init(state)

    // const unsubscribe = devTools?.subscribe((action) => {
    //   console.log(action)
    //   switch (action.type) {
    //     case 'ACTION':
    //       if (typeof action.payload !== 'string') {
    //         console.error(
    //           '[@bit-about/state devtools] Unsupported action format'
    //         )
    //       }

    //       // Todo parse
    //       break

    //     case 'DISPATCH':
    //       switch (action.payload?.type) {
    //         case 'COMMIT':
    //         case 'RESET':
    //           devTools?.init(state)
    //           archive.current = { 0: { state, props } }
    //           lastActionId.current = 0
    //           setActiveActionId({ current: 0 })
    //           break

    //         case 'ROLLBACK':
    //           // todo
    //           break

    //         case 'JUMP_TO_STATE':
    //         case 'JUMP_TO_ACTION':
    //           setActiveActionId({ current: action.payload.actionId })
    //           break

    //         case 'IMPORT_STATE':
    //           // todo
    //           break

    //         case 'PAUSE_RECORDING':
    //           isRecording.current = !isRecording.current
    //           break
    //       }
    //   }
    // })

    // return () => {
    //   unsubscribe?.()
    // }
  }, [])

  // Detecting parent props update
  if (!compareOneLevelDeepFunc(lastEntry.props, props)) {
    const action: ActionParentPropsUpdate = {
      type: 'PARENT_PROPS_UPDATE',
      props
    }

    actionsQueue.current.push(action)
  }

  // Actions dispatcher
  do {
    const [firstAction] = actionsQueue.current
    const action: Action =
      firstAction ?? ({ type: 'SIDE_EFFECT' } as ActionSideEffect)

    devTools.current?.send(action, state)
    archive.current[lastActionId + 1] = { state, props }
    actionsQueue.current.shift()

    // Moving to the newest one
    activeActionId.current = lastActionId + 1
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

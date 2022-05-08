/* istanbul ignore file */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import type {} from '@redux-devtools/extension'
import { compareOneLevelDeepFunc } from './compare'

/**
 * DevTools types
 */

interface ActionParentPropsUpdate<Props = unknown> {
  type: 'PARENT_PROPS_UPDATE'
  props: Props
}

interface ActionSetState<State = unknown> {
  type: 'SET_STATE'
  state: State
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

type Action<State = unknown> =
  | ActionParentPropsUpdate
  | ActionCall
  | ActionSideEffect
  | ActionJump
  | ActionReset
  | ActionSetState<State>

type ActionArchiveEntry<State, Props> = {
  state: State
  props: Props
}

/**
 * Context
 */

interface DevTools<State = unknown> {
  init: (state: State) => void
  send: (action: Action<State>, state: State) => void
  subscribe: (
    listener: (message: { type: string; payload: any }) => void
  ) => (() => void) | undefined
}

interface DevToolsContextValue<State = unknown> {
  name: { current: string }
  actionsQueue: { current: Action<State>[] }
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

  return useCallback((...args: Arguments): ReturnType => {
    actionsQueue.current.push({
      type: `ACTION/${id}`,
      payload: args
    })

    return fn(...args)
  }, [])
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
  } = useContext(DevToolsContext as React.Context<DevToolsContextValue<State>>)
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
    devTools.current = window.__REDUX_DEVTOOLS_EXTENSION__?.connect({
      name
    }) as unknown as DevTools<State>

    devTools.current?.init(state)
  }, [])

  // Messages from GUI
  useEffect(() => {
    const unsubscribe = devTools.current?.subscribe((message) => {
      console.log(message)
      switch (message.type) {
        case 'ACTION':
          const showError = () => {
            console.error(
              '[@bit-about/state devtools] Unsupported action format.'
            )
            console.warn(
              '[@bit-about/state devtools] Available commands:\n',
              '1. Setting state { type: "SET_STATE", state: {...} }\n',
              '2. Calling state action { type: "ACTION/yourAction", payload: [] }\n'
            )
          }

          if (typeof message.payload !== 'string') {
            showError()
          }

          try {
            const {
              type,
              state: payloadState = {},
              payload: payloadArgs = []
            }: { type: string; state: any; payload: any[] } = JSON.parse(
              message.payload
            )

            if (type.startsWith('ACTION/')) {
              const [, id] = type.split('/')

              actionsQueue.current.push({
                type: `ACTION/${id}`,
                payload: payloadArgs
              })

              state[id](...payloadArgs)
            }

            if (type === 'SET_STATE') {
              actionsQueue.current.push({
                type: `SET_STATE`,
                state: payloadState
              })

              // Force refresh
              setActiveActionId((value) => ({ current: value.current }))
            }
          } catch (e) {
            console.error(e)
            showError()
          }

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
              const {
                nextLiftedState: {
                  actionsById: actions = {},
                  computedStates: states = []
                }
              } = message.payload

              devTools.current?.init(states[0].state)

              const entries = Object.entries(actions) as Array<
                [string, { action: Action }]
              >

              entries.slice(1).forEach(([id, { action }]) => {
                devTools.current?.send(
                  action as Action<State>,
                  states[id].state
                )
              })

              archive.current = entries.reduce(
                (acc, [id]) => ({
                  ...acc,
                  [id]: {
                    state: {
                      ...lastEntry.state, // Functions cannot be resolved from json, so it's workaround
                      ...states[id].state
                    },
                    // Props here are not so imporant
                    // (are only necessary for comparasion to detect parent's props changes)
                    props
                  }
                }),
                {}
              )

              const lastActionId = Object.keys(archive.current)
                .map(Number)
                .sort((a, b) => b - a)[0]

              actionsQueue.current = [
                {
                  type: '@@RESET'
                }
              ]
              setActiveActionId({ current: lastActionId })
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
  })

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
    if (action.type === 'SET_STATE') {
      archive.current[lastActionId + 1] = {
        state: {
          ...state,
          ...action.state
        },
        props
      }
    } else {
      archive.current[lastActionId + 1] = { state, props }
    }
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

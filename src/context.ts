import * as React from 'react'
import {
  unstable_NormalPriority as NormalPriority,
  unstable_runWithPriority as runWithPriority
} from 'scheduler'
import {
  Context,
  ContextReducer,
  ContextSelector,
  ContextValue,
  ContextVersion
} from './types'
import { compareFunc, compareOneLevelDeepFunc } from './compare'

const isDev = process.env.NODE_ENV !== 'production'

const canUseDOM = (): boolean =>
  typeof window !== 'undefined' &&
  !!(window.document && window.document.createElement)

const useIsomorphicLayoutEffect: typeof React.useEffect = canUseDOM()
  ? React.useLayoutEffect
  : React.useEffect

const createProvider = <Value>(
  Original: React.Provider<ContextValue<Value>>
) => {
  const Provider: React.FC<React.ProviderProps<Value>> = (props) => {
    // Holds an actual "props.value"
    const valueRef = React.useRef(props.value)
    // Used to sync context updates and avoid stale values, can be considered as render/effect counter of Provider.
    const versionRef = React.useRef(0)

    // A stable object, is used to avoid context updates via mutation of its values.
    const contextValue = React.useRef<ContextValue<Value>>()

    if (!contextValue.current) {
      contextValue.current = {
        value: valueRef,
        version: versionRef,
        listeners: []
      }
    }

    useIsomorphicLayoutEffect(() => {
      valueRef.current = props.value
      versionRef.current += 1

      runWithPriority(NormalPriority, () => {
        ;(contextValue.current as ContextValue<Value>).listeners.forEach(
          (listener) => {
            listener([versionRef.current, props.value])
          }
        )
      })
    }, [props.value])

    return React.createElement(
      Original,
      { value: contextValue.current },
      props.children
    )
  }

  if (isDev) {
    Provider.displayName = 'ContextSelector.Provider'
  }

  return Provider as unknown as React.Provider<ContextValue<Value>>
}

export const createContext = <Value>(defaultValue: Value): Context<Value> => {
  const context = React.createContext<ContextValue<Value>>({
    value: { current: defaultValue },
    version: { current: -1 },
    listeners: []
  })

  context.Provider = createProvider<Value>(context.Provider)

  // We don't support Consumer API
  delete (context as unknown as Context<Value>).Consumer

  return context as unknown as Context<Value>
}

export function useContextSelector<Value, SelectedValue>(
  context: Context<Value>,
  selector?: ContextSelector<Value, SelectedValue>
): SelectedValue

export function useContextSelector<Value>(context: Context<Value>): Value

export function useContextSelector<Value, SelectedValue>(
  context: Context<Value>,
  selector?: ContextSelector<Value, SelectedValue>
): Value | SelectedValue {
  const contextValue = React.useContext(
    context as unknown as Context<ContextValue<Value>>
  )

  const {
    value: { current: value },
    version: { current: version },
    listeners
  } = contextValue

  if (version === -1) {
    console.warn(
      'The context hook must be used in component wrapped with its corresponding Provider'
    )
  }

  console.log(selector)
  const selected = selector?.(value) ?? value

  // eslint-disable-next-line no-self-compare
  const isCreatedOnFly = selector && selector(value) !== selector(value)
  const isEqual = isCreatedOnFly ? compareOneLevelDeepFunc : compareFunc

  const [state, dispatch] = React.useReducer<
    ContextReducer<Value, Value | SelectedValue>
  >(
    (
      prevState: readonly [
        Value /* contextValue */,
        Value | SelectedValue /* selector(value) */
      ],
      payload:
        | undefined // undefined from render below
        | readonly [ContextVersion, Value] // from provider effect
    ): readonly [Value, Value | SelectedValue] => {
      if (!payload) {
        // early bail out when is dispatched during render
        return [value, selected] as const
      }

      if (payload[0] <= version) {
        if (isEqual(prevState[1], selected)) {
          return prevState // bail out
        }

        return [value, selected] as const
      }

      try {
        if (isEqual(prevState[0], payload[1])) {
          return prevState // do not update
        }

        const nextSelected = selector?.(payload[1]) ?? payload[1]

        if (isEqual(prevState[1], nextSelected)) {
          return prevState // do not update
        }

        return [payload[1], nextSelected] as const
      } catch (e) {
        // ignored (stale props or some other reason)
      }

      // explicitly spread to enforce typing
      return [prevState[0], prevState[1]] as const // schedule update
    },
    [value, selected] as const
  )

  if (!isEqual(state[1], selected)) {
    // schedule re-render
    // this is safe because it's self contained
    dispatch(undefined)
  }

  useIsomorphicLayoutEffect(() => {
    listeners.push(dispatch)

    return () => {
      const index = listeners.indexOf(dispatch)
      listeners.splice(index, 1)
    }
  }, [listeners])

  return state[1]
}

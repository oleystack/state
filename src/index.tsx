import * as React from 'react'
import {
  unstable_NormalPriority as NormalPriority,
  unstable_runWithPriority as runWithPriority
} from 'scheduler'

type ContextVersion = number
type Provider<Props> = React.FC<Props>
type ContextSelectorHook<Value> = <SelectedValue>(
  selector: ContextSelector<Value, SelectedValue>
) => SelectedValue
type ContextTuple<Props, Value> = [Provider<Props>, ContextSelectorHook<Value>]

type Context<Props, Value> = React.Context<Value> & {
  Provider: Provider<Props>
  // We don't support Consumer API
  Consumer: never
}

type ContextValue<Value> = {
  /** Holds a set of subscribers from components. */
  listeners: ((payload: readonly [ContextVersion, Value]) => void)[]

  /** Holds an actual value of React's context that will be propagated down for computations. */
  value: React.MutableRefObject<Value>

  /** A version field is used to sync a context value and consumers. */
  version: React.MutableRefObject<ContextVersion>
}

type ContextReducer<Value, SelectedValue> = React.Reducer<
  readonly [Value, SelectedValue],
  undefined | readonly [ContextVersion, Value]
>

type ContextSelector<Value, SelectedValue> = (value: Value) => SelectedValue

const isDev = process.env.NODE_ENV !== 'production'

const canUseDOM = (): boolean =>
  typeof window !== 'undefined' &&
  !!(window.document && window.document.createElement)

const useIsomorphicLayoutEffect: typeof React.useEffect = canUseDOM()
  ? React.useLayoutEffect
  : React.useEffect

const createProvider = <Value,>(
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

const createContext = <Props, Value>(
  defaultValue: Value
): Context<Props, Value> => {
  const context = React.createContext<ContextValue<Value>>({
    value: { current: defaultValue },
    version: { current: -1 },
    listeners: []
  })

  context.Provider = createProvider<Value>(context.Provider)

  // We don't support Consumer API
  delete (context as unknown as Context<Props, Value>).Consumer

  return context as unknown as Context<Props, Value>
}

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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore fallback to native if it exists (not in IE11)
  typeof Object.is === 'function' ? Object.is : is

const useContextSelector = <Props, Value, SelectedValue>(
  context: Context<Props, Value>,
  selector: ContextSelector<Value, SelectedValue>
): SelectedValue => {
  const contextValue = React.useContext(
    context as unknown as Context<Props, ContextValue<Value>>
  )

  const {
    value: { current: value },
    version: { current: version },
    listeners
  } = contextValue

  const selected = selector(value)

  const [state, dispatch] = React.useReducer<
    ContextReducer<Value, SelectedValue>
  >(
    (
      prevState: readonly [
        Value /* contextValue */,
        SelectedValue /* selector(value) */
      ],
      payload:
        | undefined // undefined from render below
        | readonly [ContextVersion, Value] // from provider effect
    ): readonly [Value, SelectedValue] => {
      if (!payload) {
        // early bail out when is dispatched during render
        return [value, selected] as const
      }

      if (payload[0] <= version) {
        if (objectIs(prevState[1], selected)) {
          return prevState // bail out
        }

        return [value, selected] as const
      }

      try {
        if (objectIs(prevState[0], payload[1])) {
          return prevState // do not update
        }

        const nextSelected = selector(payload[1])

        if (objectIs(prevState[1], nextSelected)) {
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

  if (!objectIs(state[1], selected)) {
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

function state<Props, Value>(
  useValue: (props: Props) => Value
): ContextTuple<Props, Value> {
  const context = createContext<Props, Value>({} as Value)

  const Provider: React.FC<Props> = (props) => {
    const value = useValue(props)
    return <context.Provider value={value}>{props.children}</context.Provider>
  }

  const useBindContextSelector = <SelectedValue,>(
    selector: ContextSelector<Value, SelectedValue>
  ) => useContextSelector(context, selector)

  return [Provider, useBindContextSelector]
}

export default state

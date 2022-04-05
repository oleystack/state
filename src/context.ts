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
import { canUseDOM, isDev } from './common'

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
    Provider.displayName = 'BitAboutState.Provider'
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

const GET_SELLECTOR_NULL =
  <Value, SelectedValue>() =>
  (state: Value) =>
    state as unknown as SelectedValue

export function useContextSelector<Value, SelectedValue = Value>(
  context: Context<Value>,
  selector: ContextSelector<Value, SelectedValue> = GET_SELLECTOR_NULL<
    Value,
    SelectedValue
  >()
): SelectedValue {
  const contextValue = React.useContext(
    context as unknown as Context<ContextValue<Value>>
  )

  const {
    value: { current: currentState },
    version: { current: version },
    listeners
  } = contextValue

  if (isDev && version === -1) {
    console.warn(
      'The context hook must be used in component wrapped with its corresponding Provider'
    )
  }

  const currentSelectedState = selector(currentState)

  // eslint-disable-next-line no-self-compare
  const isCreatedOnFly = selector(currentState) !== selector(currentState)
  const isEqual = isCreatedOnFly ? compareOneLevelDeepFunc : compareFunc

  const [[, cachedSelectedState], dispatch] = React.useReducer<
    ContextReducer<Value, SelectedValue>
  >(
    (
      prev: readonly [
        Value /* contextValue */,
        SelectedValue /* selector(value) */
      ],
      payload:
        | undefined // undefined from render below
        | readonly [ContextVersion, Value] // from provider effect
    ): readonly [Value, SelectedValue] => {
      const update = [currentState, currentSelectedState] as const
      const doNotUpdate = prev

      // Update during component with hook rerender
      if (!payload) {
        return update
      }

      const [prevState, prevSelectedState] = prev
      const [nextVersion, nextState] = payload

      // Update from provider props
      if (nextVersion <= version) {
        if (isEqual(prevSelectedState, currentSelectedState)) {
          return doNotUpdate
        }

        return update
      }

      // Update from state-hook update
      try {
        if (isEqual(prevState, nextState)) {
          return doNotUpdate
        }

        const nextSelectedState = selector(nextState)

        if (isEqual(prevSelectedState, nextSelectedState)) {
          return doNotUpdate
        }

        return [nextState, nextSelectedState] as const
      } catch (e) {
        // stale props or some other reason
        if (isDev) {
          console.warn('Library discovered stale props issue')
        }
      }

      // Edge Case - Force update (create new array with old values)
      return [prevState[0], prevState[1]] as const
    },
    [currentState, currentSelectedState] as const
  )

  if (!isEqual(cachedSelectedState, currentSelectedState)) {
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

  return currentSelectedState
}

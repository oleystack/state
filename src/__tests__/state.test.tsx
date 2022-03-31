import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import state from '../state'
import { ContextSelector } from '../types'

// Counter Component
const Counter = ({ role = 'counter' }: { role: string }) => {
  const renderCounter = React.useRef(0)
  renderCounter.current = renderCounter.current + 1
  return <p role={role}>{renderCounter.current}</p>
}

test('Basic usage', () => {
  const VALUE = 'Alice'
  const [Provider, useBase] = state(() => {
    const [value] = React.useState(VALUE)
    return { value }
  })

  const Child = () => {
    const { value } = useBase()
    return <p role='value'>{value}</p>
  }

  const App = () => (
    <Provider>
      <Child />
    </Provider>
  )
  const { getByText } = render(<App />)
  expect(getByText(VALUE)).toBeDefined()
})

test('Rerender', () => {
  const [Provider, useBase] = state(() => {
    const [value, setValue] = React.useState(0)
    return { value, setValue }
  })

  const Button = () => {
    const { setValue } = useBase()
    return <button role='button' onClick={() => setValue(5)} />
  }

  const Child = () => {
    const { value } = useBase()
    return <p role='value'>{value}</p>
  }

  const App = () => (
    <Provider>
      <Button />
      <Child />
    </Provider>
  )
  const { getByRole } = render(<App />)
  expect(getByRole('value').textContent).toEqual('0')
  fireEvent.click(getByRole('button'))
  expect(getByRole('value').textContent).toEqual('5')
})

test('Rerender with selectors', () => {
  const [Provider, useBase] = state(() => {
    const [alice, setAlice] = React.useState(0)
    const [bob, setBob] = React.useState(0)
    return { alice, setAlice, bob, setBob }
  })

  const Buttons = () => {
    const [setAlice, setBob] = useBase((state) => [
      state.setAlice,
      state.setBob
    ])
    return (
      <>
        <button
          role='increment_alice'
          onClick={() => setAlice((state) => state + 1)}
        />
        <button
          role='increment_bob'
          onClick={() => setBob((state) => state + 1)}
        />
        <Counter role='counter_buttons' />
      </>
    )
  }

  const Alice = () => {
    const alice = useBase((state) => state.alice)
    return (
      <>
        <Counter role='counter_alice' />
        <p role='alice'>{alice}</p>
      </>
    )
  }

  const Bob = () => {
    const bob = useBase((state) => state.bob)
    return (
      <>
        <Counter role='counter_bob' />
        <p role='bob'>{bob}</p>
      </>
    )
  }

  const App = () => (
    <Provider>
      <Buttons />
      <Alice />
      <Bob />
    </Provider>
  )
  const { getByRole } = render(<App />)

  // Creating test helper
  type TestResults = {
    alice: number
    aliceCounter: number
    bob: number
    bobCounter: number
    buttonsCounter: number
  }
  const expectResults = (expected: TestResults) => {
    expect(getByRole('alice').textContent).toEqual(expected.alice.toString())
    expect(getByRole('counter_alice').textContent).toEqual(
      expected.aliceCounter.toString()
    )
    expect(getByRole('bob').textContent).toEqual(expected.bob.toString())
    expect(getByRole('counter_bob').textContent).toEqual(
      expected.bobCounter.toString()
    )
    expect(getByRole('counter_buttons').textContent).toEqual(
      expected.buttonsCounter.toString()
    )
  }

  // Basic render
  expectResults({
    alice: 0,
    aliceCounter: 1,
    bob: 0,
    bobCounter: 1,
    buttonsCounter: 1
  })

  // On Alice increment
  fireEvent.click(getByRole('increment_alice'))
  expectResults({
    alice: 1,
    aliceCounter: 2,
    bob: 0,
    bobCounter: 1,
    buttonsCounter: 1
  })

  // On Bob increment
  fireEvent.click(getByRole('increment_bob'))
  expectResults({
    alice: 1,
    aliceCounter: 2,
    bob: 1,
    bobCounter: 2,
    buttonsCounter: 1
  })

  // On Alice increment again
  fireEvent.click(getByRole('increment_alice'))
  expectResults({
    alice: 2,
    aliceCounter: 3,
    bob: 1,
    bobCounter: 2,
    buttonsCounter: 1
  })
})

test('Rerender with all selectors', () => {
  const [Provider, useBase] = state(() => {
    const [alice, setAlice] = React.useState(0)
    const [bob, setBob] = React.useState(0)
    return { alice, setAlice, bob, setBob }
  })

  const Buttons = () => {
    const [setAlice, setBob] = useBase((state) => [
      state.setAlice,
      state.setBob
    ])
    return (
      <>
        <button
          role='increment_alice'
          onClick={() => setAlice((state) => state + 1)}
        />
        <button
          role='increment_bob'
          onClick={() => setBob((state) => state + 1)}
        />
        <Counter role='counter_buttons' />
      </>
    )
  }

  const AllSelector = () => {
    const { alice } = useBase()
    return (
      <>
        <Counter role='counter_all_selector' />
        <p role='alice_all_selector'>{alice}</p>
      </>
    )
  }

  const KeySelector = () => {
    const alice = useBase((state) => state.alice)
    return (
      <>
        <Counter role='counter_key_selector' />
        <p role='alice_key_selector'>{alice}</p>
      </>
    )
  }

  const ArraySelector = () => {
    const [alice] = useBase((state) => [state.alice])
    return (
      <>
        <Counter role='counter_array_selector' />
        <p role='alice_array_selector'>{alice}</p>
      </>
    )
  }

  const ObjSelector = () => {
    const { alice } = useBase((state) => ({ alice: state.alice }))
    return (
      <>
        <Counter role='counter_obj_selector' />
        <p role='alice_obj_selector'>{alice}</p>
      </>
    )
  }

  const App = () => (
    <Provider>
      <Buttons />
      <AllSelector />
      <KeySelector />
      <ArraySelector />
      <ObjSelector />
    </Provider>
  )
  const { getByRole } = render(<App />)

  // Creating test helper
  type TestResults = {
    allSelectorAlice: number
    allSelectorCounter: number
    keySelectorAlice: number
    keySelectorCounter: number
    arraySelectorAlice: number
    arraySelectorCounter: number
    objSelectorAlice: number
    objSelectorCounter: number
    buttonsCounter: number
  }
  const expectResults = (expected: TestResults) => {
    expect(getByRole('counter_all_selector').textContent).toEqual(
      expected.allSelectorCounter.toString()
    )
    expect(getByRole('alice_all_selector').textContent).toEqual(
      expected.allSelectorAlice.toString()
    )
    expect(getByRole('counter_key_selector').textContent).toEqual(
      expected.keySelectorCounter.toString()
    )
    expect(getByRole('alice_key_selector').textContent).toEqual(
      expected.keySelectorAlice.toString()
    )
    expect(getByRole('counter_array_selector').textContent).toEqual(
      expected.arraySelectorCounter.toString()
    )
    expect(getByRole('alice_array_selector').textContent).toEqual(
      expected.arraySelectorAlice.toString()
    )
    expect(getByRole('counter_obj_selector').textContent).toEqual(
      expected.objSelectorCounter.toString()
    )
    expect(getByRole('alice_key_selector').textContent).toEqual(
      expected.objSelectorAlice.toString()
    )
    expect(getByRole('counter_buttons').textContent).toEqual(
      expected.buttonsCounter.toString()
    )
  }

  // Basic render
  expectResults({
    allSelectorAlice: 0,
    allSelectorCounter: 1,
    keySelectorAlice: 0,
    keySelectorCounter: 1,
    arraySelectorAlice: 0,
    arraySelectorCounter: 1,
    objSelectorAlice: 0,
    objSelectorCounter: 1,
    buttonsCounter: 1
  })

  // On Alice increment
  fireEvent.click(getByRole('increment_alice'))
  expectResults({
    allSelectorAlice: 1,
    allSelectorCounter: 2,
    keySelectorAlice: 1,
    keySelectorCounter: 2,
    arraySelectorAlice: 1,
    arraySelectorCounter: 2,
    objSelectorAlice: 1,
    objSelectorCounter: 2,
    buttonsCounter: 1
  })

  // On Bob increment
  fireEvent.click(getByRole('increment_bob'))
  expectResults({
    allSelectorAlice: 1,
    allSelectorCounter: 3,
    keySelectorAlice: 1,
    keySelectorCounter: 2,
    arraySelectorAlice: 1,
    arraySelectorCounter: 2,
    objSelectorAlice: 1,
    objSelectorCounter: 2,
    buttonsCounter: 1
  })

  // On Alice increment again
  fireEvent.click(getByRole('increment_alice'))
  expectResults({
    allSelectorAlice: 2,
    allSelectorCounter: 4,
    keySelectorAlice: 2,
    keySelectorCounter: 3,
    arraySelectorAlice: 2,
    arraySelectorCounter: 3,
    objSelectorAlice: 2,
    objSelectorCounter: 3,
    buttonsCounter: 1
  })
})

test('No provider error', () => {
  jest.spyOn(console, 'warn').mockImplementation(() => {})
  const [, useBase] = state(() => {
    const [value] = React.useState(0)
    return { value }
  })

  const Child = () => {
    const { value } = useBase()
    return <p role='value'>{value}</p>
  }

  const App = () => <Child />
  render(<App />)
  expect(console.warn).toHaveBeenCalledWith(
    'The context hook must be used in component wrapped with its corresponding Provider'
  )
})

test('Multiple selectors type in one component', () => {
  const [Provider, useBase] = state(() => {
    const [alice, setAlice] = React.useState(0)
    const [bob, setBob] = React.useState(0)
    return { alice, setAlice, bob, setBob }
  })

  const Buttons = () => {
    const [setAlice, setBob] = useBase((state) => [
      state.setAlice,
      state.setBob
    ])
    return (
      <>
        <button
          role='increment_alice'
          onClick={() => setAlice((state) => state + 1)}
        />
        <button
          role='increment_bob'
          onClick={() => setBob((state) => state + 1)}
        />
        <Counter role='counter_buttons' />
      </>
    )
  }

  const Alice = () => {
    const alice = useBase((state) => state.alice)

    useBase((state) => state.alice)
    useBase((state) => [state.alice, state.setAlice])
    useBase((state) => ({
      alice: state.alice,
      bob: state.setAlice
    }))

    return (
      <>
        <Counter role='counter_alice' />
        <p role='alice'>{alice}</p>
      </>
    )
  }

  const App = () => (
    <Provider>
      <Buttons />
      <Alice />
    </Provider>
  )
  const { getByRole } = render(<App />)

  // Creating test helper
  type TestResults = {
    alice: number
    aliceCounter: number
    buttonsCounter: number
  }
  const expectResults = (expected: TestResults) => {
    expect(getByRole('alice').textContent).toEqual(expected.alice.toString())
    expect(getByRole('counter_alice').textContent).toEqual(
      expected.aliceCounter.toString()
    )

    expect(getByRole('counter_buttons').textContent).toEqual(
      expected.buttonsCounter.toString()
    )
  }

  // Basic render
  expectResults({
    alice: 0,
    aliceCounter: 1,
    buttonsCounter: 1
  })

  // On Alice increment
  fireEvent.click(getByRole('increment_alice'))
  expectResults({
    alice: 1,
    aliceCounter: 2,
    buttonsCounter: 1
  })

  // On Bob increment
  fireEvent.click(getByRole('increment_bob'))
  expectResults({
    alice: 1,
    aliceCounter: 2,
    buttonsCounter: 1
  })

  // On Alice increment again
  fireEvent.click(getByRole('increment_alice'))
  expectResults({
    alice: 2,
    aliceCounter: 3,
    buttonsCounter: 1
  })
})

test('Shallow comparasion', () => {
  const OBJ_X = { a: -1 }
  const OBJ_Y = { a: 1 }

  const [Provider, useBase] = state(() => {
    const [, forceUpdate] = React.useReducer((x) => x + 1, 0)

    const [alice, setAlice] = React.useState({ abc: OBJ_X })
    const [bob, setBob] = React.useState({ cba: 123 })

    const provokeRerender = React.useCallback(() => {
      alice.abc = OBJ_Y
      forceUpdate()
    }, [forceUpdate, alice])

    return { alice, bob, provokeRerender, setAlice, setBob }
  })

  const Buttons = () => {
    const [provokeRerender, setAlice, setBob] = useBase((state) => [
      state.provokeRerender,
      state.setAlice,
      state.setBob
    ])

    return (
      <>
        <button role='provoke_rerender' onClick={() => provokeRerender()} />
        <button
          role='change_alice'
          onClick={() => setAlice({ abc: { a: Math.random() } })}
        />
        <button
          role='change_bob'
          onClick={() => setBob({ cba: Math.random() })}
        />
        <Counter role='counter_buttons' />
      </>
    )
  }

  const Alice = () => {
    useBase((state) => state.alice)

    return (
      <>
        <Counter role='counter_alice' />
      </>
    )
  }

  const Bob = () => {
    useBase((state) => state.bob)

    return (
      <>
        <Counter role='counter_bob' />
      </>
    )
  }

  const BothArray = () => {
    useBase((state) => [state.alice, state.bob])

    return (
      <>
        <Counter role='counter_both_array' />
      </>
    )
  }

  const BothObj = () => {
    useBase((state) => ({ alice: state.alice, bob: state.bob }))

    return (
      <>
        <Counter role='counter_both_obj' />
      </>
    )
  }

  const App = () => (
    <Provider>
      <Buttons />
      <Alice />
      <Bob />
      <BothArray />
      <BothObj />
    </Provider>
  )
  const { getByRole } = render(<App />)

  // Creating test helper
  type TestResults = {
    aliceCounter: number
    bobCounter: number
    bothArrayCounter: number
    bothObjCounter: number
    buttonsCounter: number
  }
  const expectResults = (expected: TestResults) => {
    expect(getByRole('counter_alice').textContent).toEqual(
      expected.aliceCounter.toString()
    )

    expect(getByRole('counter_bob').textContent).toEqual(
      expected.bobCounter.toString()
    )

    expect(getByRole('counter_both_array').textContent).toEqual(
      expected.bothArrayCounter.toString()
    )

    expect(getByRole('counter_both_obj').textContent).toEqual(
      expected.bothObjCounter.toString()
    )

    expect(getByRole('counter_buttons').textContent).toEqual(
      expected.buttonsCounter.toString()
    )
  }

  // Basic render
  expectResults({
    aliceCounter: 1,
    bobCounter: 1,
    bothArrayCounter: 1,
    bothObjCounter: 1,
    buttonsCounter: 1
  })

  // Test shallow copy
  fireEvent.click(getByRole('provoke_rerender'))
  expectResults({
    aliceCounter: 1,
    bobCounter: 1,
    bothArrayCounter: 1,
    bothObjCounter: 1,
    buttonsCounter: 1
  })

  fireEvent.click(getByRole('change_bob'))
  expectResults({
    aliceCounter: 1,
    bobCounter: 2,
    bothArrayCounter: 2,
    bothObjCounter: 2,
    buttonsCounter: 1
  })

  fireEvent.click(getByRole('change_alice'))
  expectResults({
    aliceCounter: 2,
    bobCounter: 2,
    bothArrayCounter: 3,
    bothObjCounter: 3,
    buttonsCounter: 2 // Because changing alice updated useCallback (provokeRerender)
  })

  fireEvent.click(getByRole('provoke_rerender'))
  expectResults({
    aliceCounter: 2,
    bobCounter: 2,
    bothArrayCounter: 3,
    bothObjCounter: 3,
    buttonsCounter: 2
  })
})

test('Shallow comparasion selector switching', () => {
  const SELLECTOR: ContextSelector<{}, any>[] = [
    () => [1, 2, 3],
    () => [1, 2],
    () => ({ a: 1 }),
    () => ({ b: 1 }),
    () => ({ b: 2 }),
    () => 5,
    () => 10.4,
    () => [1, 2, 3],
    () => undefined,
    () => null,
    () => 3
  ]

  const [Provider, useBase] = state(() => {
    return {}
  })

  const Child = () => {
    const [index, setIndex] = React.useState(0)
    useBase(SELLECTOR[index])

    return (
      <>
        <button
          role='increase_index'
          onClick={() => setIndex((index) => index + 1)}
        />
        <Counter role='counter' />
        <p role='index'>{index}</p>
      </>
    )
  }

  const App = () => (
    <Provider>
      <Child />
    </Provider>
  )
  const { getByRole } = render(<App />)

  // Basic render
  expect(getByRole('counter').textContent).toEqual('1')

  // Test shallow copy
  for (let i = 0; i < SELLECTOR.length; i++) {
    fireEvent.click(getByRole('increase_index'))
    expect(Number(getByRole('index').textContent)).toEqual(i + 1) // For better test maintenance
    expect(getByRole('counter').textContent).toEqual((i + 2).toString())
  }
})

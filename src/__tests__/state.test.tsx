import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import state from '../state'

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

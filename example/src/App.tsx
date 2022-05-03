import React, { useRef, useState } from 'react'

import { state } from '@bit-about/state'

/**
 * Declaring STATE
 */
type Props = { alice: number }
const useCustomState = ({ alice: initialAlice }: Props) => {
  const [aliceValue, setAliceValue] = useState(initialAlice)
  const [bobValue, setBobValue] = useState(0)

  return { aliceValue, setAliceValue, bobValue, setBobValue }
}
const [TestProvider, useTest] = state(useCustomState)

/**
 * Counter
 */
const Counter = () => {
  const renderCounter = useRef(0)
  renderCounter.current = renderCounter.current + 1

  return <h3>rendered {renderCounter.current} times</h3>
}

/**
 * Alice counter
 */
const Alice = () => {
  const value = useTest((state) => state.aliceValue)

  return (
    <div>
      <h1>Alice</h1>
      <Counter />
      <p>value {value}</p>
    </div>
  )
}

/**
 * Buttons
 */
const Buttons = () => {
  const [setAlice, setBob] = useTest((state) => [
    state.setAliceValue,
    state.setBobValue
  ])

  // const { setAlice, setBob } = useTest((state) => ({
  //   setAlice: state.setAliceValue,
  //   setBob: state.setBobValue
  // }))

  return (
    <div>
      <h1>Buttons</h1>
      <Counter />
      <button onClick={() => setAlice((value) => value + 1)}>
        Increment Alice
      </button>
      <button onClick={() => setBob((value) => value + 1)}>
        Increment Bob
      </button>
    </div>
  )
}

/**
 * Bob
 */
const Bob = () => {
  const value = useTest((state) => state.bobValue)

  return (
    <div>
      <h1>Bob</h1>
      <Counter />
      <p>value {value}</p>
    </div>
  )
}

/**
 * App
 */
const App = () => {
  const [initAlice, setInitAlice] = useState(0)
  const [, setInitBob] = useState(0)

  return (
    <TestProvider alice={initAlice}>
      <Alice />
      <Buttons />
      <Bob />
      <button onClick={() => setInitAlice((value) => value + 1)}>
        setInitAlice
      </button>
      <button onClick={() => setInitBob((value) => value + 1)}>
        setInitBob
      </button>
    </TestProvider>
  )
}

export default App

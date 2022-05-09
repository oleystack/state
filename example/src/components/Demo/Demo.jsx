import { useState, useRef, useEffect } from 'react'
import { state, useStoreName, useSideEffect } from '@bit-about/state'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import './Demo.css'

/**
 * @bit-about/state
 */
const [StoreProvider, useStore] = state(({ alice: initialAlice }) => {
  useStoreName('MyCustomStore')

  const [alice, setAlice] = useState(initialAlice)
  const [bob, setBob] = useState(0)

  // Side effects test
  const [autoIncrementJohn, setAutoIncrementJohn] = useState(0)
  const incrementJohn = useSideEffect(
    () => setAutoIncrementJohn((value) => value + 1),
    'autoIncrementJohn'
  )
  useEffect(() => {
    const interval = setInterval(incrementJohn, 5000)
    return () => clearInterval(interval)
  }, [incrementJohn])

  return {
    alice,
    setAlice,
    bob,
    setBob,
    autoIncrementJohn
  }
})

/**
 * Used for testing rerending component scenario
 */
const useForceUpdate = () => {
  const [, set] = useState()
  return () => set({})
}

/**
 * Render counter
 */
const RenderCounter = () => {
  const renderCounter = useRef(1)

  useEffect(() => {
    renderCounter.current = renderCounter.current + 1
  })

  return (
    <span className='container-info'>
      🔄
      <SwitchTransition>
        <CSSTransition
          key={renderCounter.current}
          addEndListener={(node, done) =>
            node.addEventListener('transitionend', done, false)
          }
          classNames='bump'
        >
          <span> {renderCounter.current}</span>
        </CSSTransition>
      </SwitchTransition>
    </span>
  )
}

/**
 * COMPONENT_1
 */
function AliceBox() {
  const [alice, setAlice] = useStore((state) => [state.alice, state.setAlice])

  return (
    <div className='container column '>
      <span className='container-title'>component_2</span>
      <RenderCounter />
      <code className='code-preview'>
        <p>alice: {alice}</p>
      </code>
      <button className='button' onClick={() => setAlice((value) => value + 1)}>
        Increment Alice
      </button>
    </div>
  )
}

/**
 * COMPONENT_2
 */
function BobBox() {
  const [bob, setBob] = useStore((state) => [state.bob, state.setBob])

  return (
    <div className='container column '>
      <span className='container-title'>component_2</span>
      <RenderCounter />
      <code className='code-preview'>
        <p>bob: {bob}</p>
      </code>
      <button className='button' onClick={() => setBob((value) => value + 1)}>
        Increment Bob
      </button>
    </div>
  )
}

/** Store preview */
function StorePreview() {
  const { alice, bob, autoIncrementJohn } = useStore()

  return (
    <code className='code-preview'>
      <p>alice: {alice}</p>
      <p>bob: {bob}</p>
      <p>autoIncrementJohn: {autoIncrementJohn}</p>
    </code>
  )
}

/**
 * main component aka APP
 */
function Demo() {
  const [alice, setAlice] = useState(10)
  const forceUpdate = useForceUpdate()

  return (
    <div className='container column demo'>
      <span className='container-title'>app</span>
      <RenderCounter />

      <div className='row center forced'>
        <button
          className='button'
          onClick={() => setAlice((value) => value + 1)}
        >
          Change state props
        </button>
        <button className='button' onClick={forceUpdate}>
          Rerender
        </button>
      </div>

      <StoreProvider alice={alice}>
        <div className='container column'>
          <span className='container-title'>store</span>
          <StorePreview />

          <div className='row'>
            <AliceBox />
            <BobBox />
          </div>
        </div>
      </StoreProvider>
    </div>
  )
}

export default Demo

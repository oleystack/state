import { useState, useRef, useEffect } from 'react'
import { state, useStoreName } from '@bit-about/state'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import './Demo.css'

/**
 * @bit-about/state
 */
const [StoreProvider, useStore] = state(({ alice: initialAlice }) => {
  useStoreName('MyCustomStore')

  const [aliceValue, setAliceValue] = useState(initialAlice)
  const [bobValue, setBobValue] = useState(0)

  return { aliceValue, setAliceValue, bobValue, setBobValue }
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
  const [alice, setAlice] = useStore((state) => [
    state.aliceValue,
    state.setAliceValue
  ])

  return (
    <div className='container column '>
      <span className='container-title'>component_2</span>
      <RenderCounter />
      <code className='code-preview'>
        <p>aliceValue: {alice}</p>
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
  const [bob, setBob] = useStore((state) => [state.bobValue, state.setBobValue])

  return (
    <div className='container column '>
      <span className='container-title'>component_2</span>
      <RenderCounter />
      <code className='code-preview'>
        <p>bobValue: {bob}</p>
      </code>
      <button className='button' onClick={() => setBob((value) => value + 1)}>
        Increment Bob
      </button>
    </div>
  )
}

/** Store preview */
function StorePreview() {
  const { aliceValue, bobValue } = useStore()

  return (
    <code className='code-preview'>
      <p>aliceValue: {aliceValue}</p>
      <p>bobValue: {bobValue}</p>
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

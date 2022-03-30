import * as React from 'react'
import { render } from '@testing-library/react'
import state from '../state'

// Counter Component
const getCounterText = (count: number) => `[rendered:${count}]`
const Counter = () => {
  const renderCounter = React.useRef(0)
  renderCounter.current = renderCounter.current + 1
  return getCounterText(renderCounter.current)
}

test('basic usage', () => {
  const VALUE = 'Alice'
  const [Provider, useBase] = state(() => {
    const [value] = React.useState(VALUE)
    return { value }
  })

  const Child = () => {
    const { value } = useBase()
    return <>{value}</>
  }

  const App = () => (
    <Provider>
      <Child />
    </Provider>
  )
  const { getByText } = render(<App />)
  expect(getByText(VALUE)).toBeDefined()
})

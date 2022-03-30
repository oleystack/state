import * as React from 'react'
import { fireEvent, getByTestId, render } from '@testing-library/react'
import state from '../state'

// Counter Component
const Counter = () => {
  const renderCounter = React.useRef(0)
  renderCounter.current = renderCounter.current + 1
  return <p role='counter'>{renderCounter.current}</p>
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

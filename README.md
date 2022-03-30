# BitAboutState
> Tiny and powerful React state management library.<br />
> 100% Idiomatic React.<br />

![bit-about-state](https://user-images.githubusercontent.com/1496580/160495578-c4a54e53-7c5f-4bc3-9db3-a45c6ed45394.png)


[![NPM](https://img.shields.io/npm/v/@bit-about/state.svg)](https://www.npmjs.com/package/@bit-about/state) 
![npm bundle size](https://img.shields.io/bundlephobia/min/@bit-about/state?label=size)
![Codecov](https://img.shields.io/codecov/c/github/bit-about/state)

## Install

```bash
npm install --save @bit-about/state
```

## Features

- 100% Idiomatic React
- 100% Typescript with state types deduction
- Efficient sub-states selectors
- State on hook
- No centralized state provider
- Tiny - only 100KB
- Just works ™️

## Usage

```jsx
import { state } from '@bit-about/state'

// 1️⃣ Create your hook-like state
const [Provider, useBase] = state(() => {
  const [alice, setAlice] = React.useState("Alice")
  return { alice, setAlice }
})

// 3️⃣ Use the Selector
const Child = () => {
  const alice = useBase(state => state.alice)
  return <p>{alice}</p>
}

// 2️⃣ Wrap the tree with the Provider
const App = () => (
  <Provider>
    <Child />
  </Provider>
)
```

## State selectors

```jsx
import { state } from '@bit-about/state'

const useBaseState = () => {
  const [alice, setAlice] = React.useState(0)
  const [bob, setBob] = React.useState(0)

  return { alice, setAlice, bob, setBob }
}

// 1️⃣ Create your hook-like state
const [Provider, useBase] = state(useBaseState)
```

Choose your own way to select state:

```jsx
// 👍 Rerender when anything changed
const { alice, bob } = useBase()

// 💪 Rerender when alice changed
const alice = useBase(state => state.alice)

// 🤌 Rerender when alice or bob changed
const [alice, bob] = useBase(state => [state.alice, state.bob])

const { alice, bob } = useBase( 
  state => ({ alice: state.alice, bob: state.bob }) 
)
```

## BitAboutState 💛 [ReactQuery](https://github.com/tannerlinsley/react-query)

```jsx
import { useQuery } from 'react-query'
import { fetchFruits } from './fruits.ts'

const [Provider, useFruits] = state(() => {
  const { data: fruits } = useQuery('fruits', fetchFruits)
  return { fruits }
})

// 🧠 Rerender ONLY when fruits changed (no matter if isLoading changes)
const fruits = useBase(state => state.fruits)
```

## Credits
- [Constate](https://github.com/diegohaz/constate) - main approach inspiration
- [use-context-selector](https://github.com/dai-shi/use-context-selector) & [FluentUI](https://github.com/microsoft/fluentui) - fancy rerender avoiding tricks and main code inspiration


## License

MIT © [Maciej Olejnik](https://github.com/Gareneye)

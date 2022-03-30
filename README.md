# <p align="center">BitAboutState</p>
<p align="center">
<img alt="" src="https://user-images.githubusercontent.com/1496580/160495578-c4a54e53-7c5f-4bc3-9db3-a45c6ed45394.png" /><br/>
<a href="https://www.npmjs.com/package/@bit-about/state"><img alt="" src="https://img.shields.io/npm/v/@bit-about/state.svg" /></a>
<img alt="" src="https://img.shields.io/bundlephobia/min/@bit-about/state?label=size" />
<img alt="" src="https://img.shields.io/codecov/c/github/bit-about/state" />
<br />
Tiny and powerful React state management library.<br />
100% Idiomatic React.<br />
</p>

## Install

```bash
npm install --save @bit-about/state
```

## Features

- 100% **Idiomatic React**
- 100% Typescript with state types deduction
- Efficient **sub-states selectors**
- State on hook
- No centralized state provider
- Tiny - only **100KB**
- **Just works** ™️

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
Choose your own way to select state:

```jsx
// 👍 Rerender when anything changed
const { alice, bob } = useBase()

// 💪 Rerender when alice changed
const alice = useBase(state => state.alice)

// 🤌 Rerender when alice or bob changed
const [alice, bob] = useBase(state => [state.alice, state.bob])

// or
const { alice, bob } = useBase( 
  state => ({ alice: state.alice, bob: state.bob }) 
)
```

## State props

```tsx
type HookProps = { alice: string, bob: string }

const [Provider, useBase] = state(
  (props: HookProps) => {
    const { alice: initialAlice, bob } = props;
    const [alice, setAlice] = React.useState(initialAlice)
    return { alice, setAlice, bob }
  }
)

const App = () => (
  <Provider alice="Alice" bob="Bob">
    <Child />
  </Provider>
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
- [Constate](https://github.com/diegohaz/constate) - approach main inspiration
- [use-context-selector](https://github.com/dai-shi/use-context-selector) & [FluentUI](https://github.com/microsoft/fluentui) - fancy rerender avoiding tricks and code main inspiration


## License
MIT © [Maciej Olejnik 🇵🇱](https://github.com/Gareneye)

---
<p align="center">🇺🇦 Slava Ukraini</p>

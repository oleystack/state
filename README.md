# BitAboutState
> Tiny and powerful state management library.

![bit-about-state](https://user-images.githubusercontent.com/1496580/160495578-c4a54e53-7c5f-4bc3-9db3-a45c6ed45394.png)


[![NPM](https://img.shields.io/npm/v/@bit-about/state.svg)](https://www.npmjs.com/package/@bit-about/state) 
![npm bundle size](https://img.shields.io/bundlephobia/min/@bit-about/state?label=size)
![Codecov](https://img.shields.io/codecov/c/github/bit-about/state)

## Install

```bash
npm install --save @bit-about/state
```

## Usage

```tsx
import { state } from '@bit-about/state'

// 1️⃣ Create your Context
const [Provider, useBase] = state(() => {
  const [alice, setAlice] = React.useState("Alice")
  return { alice, setAlice }
})

// 3️⃣ Use the Context
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

// Todo:

```tsx
import { state } from '@bit-about/state'

const useBaseState = () => {
  const [alice, setAlice] = React.useState(0)
  const [bob, setBob] = React.useState(0)

  return { alice, setAlice, bob, setBob }
}

const [Provider, useBase] = state(useBaseState)
```

```tsx
// Rerender when anything changed
const { alice, bob } = useBase()

// Rerender when alice changed
const alice = useBase(state => state.alice)

// Rerender when alice or bob changed
const [alice, bob] = useBase(state => [state.alice, state.bob])

// Rerender when alice or bob changed
const { alice, bob } = useBase( 
  state => ({ alice: state.alice, bob: state.bob }) 
)
```

## License

MIT © [Maciej Olejnik](https://github.com/Gareneye)

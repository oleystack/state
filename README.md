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
const useBaseState = () => {
  const [alice, setAlice] = useState(0)
  const [bob, setBob] = useState(0)

  return { alice, setAlice, bob, setBob }
}

const [Provider, useBase] = state(useBaseState)
```

```tsx
// Always rerender
const { alice, bob } = useTest()

// Rerender when alice changed
const alice = useTest( state => state.alice )

// Rerender when alice and bob changed
const [alice, bob] = useTest( state => [state.alice, state.bob] )

// Rerender when alice and bob changed
const { alice, bob } = useTest( state => ({ alice: state.alice, bob: state.bob }) )
```

## License

MIT © [Maciej Olejnik](https://github.com/Gareneye)

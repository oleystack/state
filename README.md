# <p align="center">BitAboutState</p>
<p align="center">
<img alt="" src="https://user-images.githubusercontent.com/1496580/160495578-c4a54e53-7c5f-4bc3-9db3-a45c6ed45394.png" /><br/>
<a href="https://www.npmjs.com/package/@bit-about/state"><img alt="" src="https://img.shields.io/npm/v/@bit-about/state.svg" /></a>
<img alt="Bundle size" src="https://img.shields.io/bundlephobia/min/@bit-about/state?label=size" />
<a href="https://codecov.io/gh/bit-about/state"><img alt="" src="https://codecov.io/gh/bit-about/state/branch/main/graph/badge.svg?token=BuGi92VqnL" /></a>
<br />
🚀 Tiny and powerful React hook-based state management library.<br />
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
- **Just works** ™

## Usage

```jsx
import * as React from 'react'
import { state } from '@bit-about/state'

// 1️⃣ Create your hook-like state
const [Provider, useBase] = state(
  () => {
    const [alice, setAlice] = React.useState("Alice")
    return { alice, setAlice }
  }
)

// 3️⃣ Use the selector hook in component
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

> **You don't need to think too much** - it's easy, look:<br />
> - create context with `state(useMyStateHook)`<br />
> - remember about wrapping functions in `React.useCallback` in your hook-like state<br />
> - wrap the components tree with the generated `Provider`<br />
> - get your state on components via generated **selector hook**

## State selectors
Choose your own way to select state and rerender component **only when necessary**.

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

> NOTE:<br />
> **Values** in objects and arrays created on the fly are shallow compared.

### 👉 Functions in state
Please remember that functions defined without `React.useCallback` create themselves from scratch every time - which results in incorrect comparisons and components think the state has changed so they rerender themselves.

```jsx
const [Provider, useBase] = state(
  () => {
    const [counter, setCounter] = React.useState(0);
   
    // ✖️ It will rerender components every time
    // const incrementCounter = () => setCounter(value => value + 1)

    const incrementCounter = React.useCallback(
      () => setCounter(value => value + 1),
      [setCounter]
    )

    return {counter, incrementCounter}
  }
)
```

## State props
The state hook allows you to pass any arguments into the context. It can be some initial state or you can even return it and pass it through to the components. Any state props change will update the context and trigger components rerendering **when necessary**.

```tsx
type HookProps = { alice: string, bob: string }

const [Provider, useBase] = state(
  (props: HookProps) => {
    const [alice, setAlice] = React.useState(props.alice)
    return { alice, setAlice, bob: props.bob }
  }
)

const App = () => (
  <Provider alice="Alice" bob="Bob">
    <Child />
  </Provider>
)
```

## BitAboutState 💛 [React Query](https://github.com/tannerlinsley/react-query)

```jsx
import { useQuery } from 'react-query'
import { fetchFruits } from './fruits.ts'

const [Provider, useFruits] = state(
  () => {
    const { data: fruits } = useQuery('fruits', fetchFruits)
    return { fruits }
  }
)

// 🧠 Rerender ONLY when fruits changed (no matter if isLoading changes)
const fruits = useBase(state => state.fruits)
```

## BitAboutState 💛 [BitAboutEvent](https://github.com/bit-about/event)
Are you tired of sending logic to the related components?<br />
Move your bussiness logic to the hook-based state using `@bit-about/state` + `@bit-about/event`.<br />

Now you've got **completely type-safe side-effects**, isn't cool?

```tsx
import { state } from '@bit-about/state'
import { useEvent } from './user-events'

const [AuthProvider, useAuth] = state(
  () => {
    const [user, setUser] = React.useState<User>(null)
    
    useEvent({
      userLogged: (user: User) => setUser(user)
    })
    
    return { user }
  }
)
```

## Partners  
<a href="https://www.wayfdigital.com/"><img alt="wayfdigital.com" width="100" height="100" src="https://user-images.githubusercontent.com/1496580/161037415-0503f763-a60b-4d40-af9f-95d1304fa486.png"/></a>

## Credits
- [Constate](https://github.com/diegohaz/constate) - approach main inspiration
- [use-context-selector](https://github.com/dai-shi/use-context-selector) & [FluentUI](https://github.com/microsoft/fluentui) - fancy rerender avoiding tricks and code main inspiration

## License
MIT © [Maciej Olejnik 🇵🇱](https://github.com/Gareneye)

## Support me
If you use my library and you like it...<br />
it would be nice if you put the name `BitAboutState` in the work experience section of your resume.<br />
Thanks 🙇🏻! 

---
<p align="center">🇺🇦 Slava Ukraini</p>

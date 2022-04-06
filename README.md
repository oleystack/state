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
- ...with static access
- No centralized state provider
- Tiny - only **100KB**
- **Just works** ™

## Usage

```jsx
import * as React from 'react'
import { state } from '@bit-about/state'

// 1️⃣ Create your hook-like store
const [Provider, useStore] = state(
  () => {
    const [alice, setAlice] = React.useState('Alice')
    return { alice, setAlice }
  }
)

// 3️⃣ Use the selector hook in component
const Child = () => {
  const alice = useStore(state => state.alice)
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
Choose your own way to select state and rerender component **only when necessary**.

```jsx
// 👍 Rerender when anything changed
const { alice, bob } = useStore()

// 💪 Rerender when alice changed
const alice = useStore(state => state.alice)

// 🤌 Rerender when alice or bob changed
const [alice, bob] = useStore(state => [state.alice, state.bob])

// or
const { alice, bob } = useStore( 
  state => ({ alice: state.alice, bob: state.bob }) 
)
```

> NOTE: **Values** in objects and arrays created on the fly are shallow compared.

## Static store
The third element of the `state()` result tuple is `store` object. Store is static helper which provides access to the state **without hook**.

```jsx
const [Provider, useStore, store] = state(...)
```

and then
```jsx
// 👍 Get whole state
const { alice } = store.get()

// 💪 Get substate
const alice = store
  .select(state => state.alice)
  .get()

// 🤌 Subscribe store and listen on changes
const subscriber = store
  .select(state => state.alice)
  .subscribe(alice => console.log(alice))
  
// remember to unsubscribe!
subscriber.unsubscriber()
```

> NOTE: It's not necessary to fetch state inside of the Provider - but it still needs to be placed somewhere to init the state.

## State props
The state hook allows you to pass any arguments into the context. It can be some initial state or you can even return it and pass it through to the components. Any state props change will update the context and trigger components rerendering **when necessary**.

```tsx
type HookProps = { alice: string, bob: string }

const [Provider, useStore] = state(
  (props: HookProps) => {
    const [alice, setAlice] = React.useState(props.alice)
    return { alice, setAlice, bob: props.bob }
  }
)

const App = () => (
  <Provider alice="Alice" bob="Bob">
    ...
  </Provider>
)
```

## 👉 Functions in state
Please remember that functions defined without `React.useCallback` create themselves from scratch every time - which results in incorrect comparisons and components think the state has changed so they rerender themselves.

```jsx
const [Provider, useStore] = state(
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

## BitAboutState 💛 [BitAboutEvent](https://github.com/bit-about/event)
Are you tired of sending logic to the related components?<br />
Move your bussiness logic to the hook-based state using `@bit-about/state` + `@bit-about/event`.<br />

Now you've got **completely type-safe side-effects**, isn't cool?

```tsx
import { state } from '@bit-about/state'
import { useEvent } from './auth-events' // Hook generated from events()
import User from '../models/user'

const [UserProvider, useUser] = state(
  () => {
    const [user, setUser] = React.useState<User | null>(null)
    
    useEvent({
      userLogged: (user: User) => setUser(user),
      userLoggout: () => setUser(null)
    })
    
    return user
  }
)
```

## BitAboutState 💛 [React Query](https://github.com/tannerlinsley/react-query)

```tsx
import { useQuery } from 'react-query'
import { fetchUser } from './user.ts'

type UserProfileHookProps = { id: number }

const [Provider, useUser] = state(
  ({ id }: UserProfileHookProps) => {
    const { data: user } = useQuery(['user', id], () => fetchUser(id))
    return { user }
  }
)

const UserProfile = ({ id }) => (
  <Provider id={id}>
    ...
  </Provider>
)

// 🧠 Rerender ONLY when user changed (no matter if isLoading changes)
const avatar = useUser(state => state.user.avatar)
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

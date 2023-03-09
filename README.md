<p align="center">
<img alt="" src="https://user-images.githubusercontent.com/1496580/162103874-f2fbde4b-f985-4c33-ac38-9d5d3b4ee37e.png" /><br/><br/>
<a href="https://www.npmjs.com/package/@bit-about/state"><img alt="" src="https://img.shields.io/npm/v/@bit-about/state.svg" /></a>
<a href="https://bundlephobia.com/package/@bit-about/state"><img alt="Bundle size" src="https://img.shields.io/bundlephobia/minzip/@bit-about/state?label=size" /></a>
<a href="https://codecov.io/gh/bit-about/state"><img alt="" src="https://img.shields.io/codecov/c/github/bit-about/state?token=BuGi92VqnL" /></a>
</p>

## Install

```bash
npm i @bit-about/state
```

## Features

- 100% **Idiomatic React**
- 100% Typescript with state types deduction
- Efficient **sub-states selectors**
- Get state from a hook...
- ...or utilise static access
- No centralized state provider
- Tiny - only **1.4kB**
- **Just works** ™

### ➡️ [Check demo](https://bit-about.github.io/state/)

## Usage

```tsx
import { useState } from 'react'
import { state } from '@bit-about/state'

// 1️⃣ Create a hook-based store
const [Provider, useStore] = state(() => {
  const [alice, setAlice] = useState('Alice')
  const [bob, setBob] = useState('Bob')
  
  return { alice, setAlice, bob, setBob }
})

// 2️⃣ Wrap tree with Provider
const App = () => (
  <Provider>
    <Child />
  </Provider>
)
```

and then
```tsx
// 3️⃣ Use the selector hook in component
const Child = () => {
  const alice = useStore(state => state.alice)
  
  return <p>{alice}</p>
}
```

## State selectors

Access fine-grained control to the specific part of your state to re-render **only when necessary**.

```tsx
// 👍 Re-render when anything changed
const { alice, bob } = useStore()

// 💪 Re-render when alice changed
const alice = useStore(state => state.alice)

// 🤌 Re-render when alice or bob changed
const [alice, bob] = useStore(state => [state.alice, state.bob])

// or
const { alice, bob } = useStore( 
  state => ({ alice: state.alice, bob: state.bob }) 
)
```

> NOTE: **Values** in objects and arrays created on the fly are shallow compared.

## Static store

The third element of the `state()` result tuple is a `store` object. Store is a static helper which provides access to the state **without a hook**.

```tsx
const [Provider, useStore, store] = state(/* ... */)
```

and then
```tsx
// 👍 Get whole state
const { alice } = store.get()

// 💪 Get substate
const alice = store
  .select(state => state.alice)
  .get()

// 🤌 Subscribe to the store and listen for changes
const subscription = store
  .select(state => state.alice)
  .subscribe(alice => console.log(alice))
  
// remember to unsubscribe!
subscription.unsubscribe()
```

## State props

The state hook allows you to pass any arguments into the context. It can be some initial state or you could even return it and pass it through to the components. All state prop changes will update the context and trigger component re-rendering **only when necessary**.

```tsx
import { useState } from 'react'
import { getUserById } from '../utils'

const [UserProvider, useUser] = state(
  ({ id }) => {
    const [user] = useState(getUserById(id))
    return user
  }
)

const UserProfile = ({ id }) => (
  <UserProvider id={id}>
    {/* ... */}
  </UserProvider>
)
```

## 👉 Functions in state

Please remember that functions defined without `React.useCallback` create themselves from scratch every time - which results in incorrect comparisons and components think the state has changed so they re-render themselves.

```tsx
import { useState, useCallback } from 'react'

const [Provider, useStore] = state(
  () => {
    const [counter, setCounter] = useState(0);
   
    // ✖️ It will re-render components every time
    // const incrementCounter = () => setCounter(value => value + 1)

    const incrementCounter = useCallback(
      () => setCounter(value => value + 1),
      [setCounter]
    )

    return { counter, incrementCounter }
  }
)
```

## BitAboutState 💛 [BitAboutEvent](https://github.com/bit-about/event)

Are you tired of sending logic to the related components?<br />
Move your bussiness logic to the hook-based state using `@bit-about/state` + `@bit-about/event`.<br />

Now you've got **completely type-safe side-effects**. Isn't that cool?

```tsx
import { useState } from 'react'
import { state } from '@bit-about/state'
import { useEvent } from './auth-events' // @bit-about/event hook
import User from '../models/user'

const [UserProvider, useUser] = state(
  () => {
    const [user, setUser] = useState<User | null>(null)
    
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
import { fetchUser } from './user'

const [UserProvider, useUser] = state(
  ({ id }) => {
    const { data: user } = useQuery(['user', id], () => fetchUser(id))
    return user
  }
)

const UserProfile = ({ id }) => (
  <UserProvider id={id}>
    {/* ... */}
  </UserProvider>
)

// 🧠 Re-render ONLY when user avatar changed (no matter if isLoading changes)
const avatar = useUser(state => state.user.avatar)
```

## Partners  
<a href="https://www.wayfdigital.com/"><img alt="wayfdigital.com" width="100" height="100" src="https://user-images.githubusercontent.com/1496580/161037415-0503f763-a60b-4d40-af9f-95d1304fa486.png"/></a>

## Credits
- [Constate](https://github.com/diegohaz/constate) - approach main inspiration
- [use-context-selector](https://github.com/dai-shi/use-context-selector) & [FluentUI](https://github.com/microsoft/fluentui) - fancy re-render avoiding tricks and code main inspiration

## License
MIT © [Maciej Olejnik 🇵🇱](https://github.com/macoley)

## Support me 

<a href="https://github.com/sponsors/macoley"><img alt="Support me!" src="https://img.shields.io/badge/github.com-Support%20me!-green"/></a>

If you use my library and you like it...<br />
it would be nice if you put the name `BitAboutState` in the work experience section of your resume.<br />
Thanks 🙇🏻! 


---
<p align="center">🇺🇦 Slava Ukraini</p>

import Demo from '../Demo/Demo'
import { ReactComponent as Github } from '../../icons/github.svg'
import { ReactComponent as Npm } from '../../icons/npm.svg'
import './App.css'

function App() {
  return (
    <div className='app'>
      <div className='app-container'>
        <header className='app-header'>
          <h2 className='title'>@bit-about/state</h2>
          <h1 className='desc'>
            🚀 Tiny and powerful React hook-based state management library.
          </h1>
          <ul className='menu'>
            <li>
              <a
                className='link'
                href='https://github.com/bit-about/state'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github
                  fill='rgb(171, 171, 171)'
                  className='icon'
                  width={32}
                  height={32}
                />
              </a>
            </li>
            <li>
              <a
                className='link'
                href='https://www.npmjs.com/package/@bit-about/state'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Npm
                  fill='rgb(171, 171, 171)'
                  className='icon'
                  width={32}
                  height={32}
                />
              </a>
            </li>
          </ul>
        </header>
        <Demo />
      </div>
    </div>
  )
}

export default App

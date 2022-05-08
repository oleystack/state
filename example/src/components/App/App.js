import Demo from '../Demo/Demo'
import './App.css'

function App() {
  return (
    <div className='app'>
      <div className='app-container'>
        <header className='app-header'>
          <h1 className='title'>@bit-about/state</h1>
          <small>
            🚀 Tiny and powerful React hook-based state management library.
          </small>
          <ul className='menu'>
            <li>
              <a
                className='link'
                href='https://github.com/bit-about/state'
                target='_blank'
                rel='noopener noreferrer'
              >
                github
              </a>
            </li>
            <li>
              <a
                className='link'
                href='https://www.npmjs.com/package/@bit-about/state'
                target='_blank'
                rel='noopener noreferrer'
              >
                npm
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

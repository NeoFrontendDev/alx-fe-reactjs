import WelcomeMessage from './WelcomeMessage'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'
import UserProfile from './UserProfile'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
          <WelcomeMessage />
        </div>
        <div>
        <Header />
        </div>
      <div>
        <MainContent />
        </div>
        <div>
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        </div>
        <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <h1 style={{ textAlign: 'center' }}React Counter App</h1>
      <Counter />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
    <div>
     <Footer />   
    </div>
  )
}

export default App

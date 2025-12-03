import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Vite + React = Hello World!</h1>
        <p>Dove vado a scrivere l'html? Non era meglio tutto in un posto?</p>
      </div>
    </>
  )
}

export default App

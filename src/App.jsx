import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 class="red-text">Vite + React = Hello World!</h1>
        <p>"La felicità si può trovare anche negli attimi più tenebrosi, se solo uno si ricorda di accendere la luce."</p>
      </div>
    </>
  )
}

export default App

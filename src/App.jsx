import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 class="">Vite + React = Hello World!</h1>
        <p>"La felicità si può trovare anche negli attimi più tenebrosi, se solo uno si ricorda di accendere la luce."</p>
        <img src="https://ilragazzosopravvissuto.wordpress.com/wp-content/uploads/2016/06/silente.jpg?w=355&h=266" alt="Dumbledore" />
      </div>
    </>
  )
}

export default App

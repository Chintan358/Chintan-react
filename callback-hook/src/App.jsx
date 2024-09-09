import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Callback from './Callback'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Callback />

    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class='text-success'>Hello</h1>
      <button class='btn btn-danger'>Clcik me</button>
    </>
  )
}

export default App

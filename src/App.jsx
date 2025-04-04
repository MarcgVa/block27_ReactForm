import SignUp from './components/SignUp'
import Authenticate from './components/Authenticate'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUp />
      <Authenticate/>
    </>
  )
}

export default App

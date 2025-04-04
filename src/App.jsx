import SignUp from './components/SignUp'
import Authenticate from './components/Authenticate'
import { useState } from 'react'
import './App.css'

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUp setToken={setToken} />
      <Authenticate token={token}/>
    </>
  )
}

export default App

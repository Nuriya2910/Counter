import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Btn'

function App() {
    const [count1, setCount1] = useState(0)
    function add() {
      setCount1(count1 + 1)
    }
  
    const [count2, setCount2] = useState(0)
    function minus() {
      setCount2(count2 - 1)
    }
  

  return (
    <div className="home">
      <Button fn={add} count={count1}/>
      <Button fn={minus} count={count2}/>
    </div>

  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(5)
  
   const addValue=()=>{
    if(counter<20)
      // setCounter(counter+1) //even if we put 5 setCounter() statements the value increases by 1
     //now we can update counter 4 times
      setCounter((prevCounter)=>prevCounter+1)
      setCounter((prevCounter)=>prevCounter+1)
      setCounter((prevCounter)=>prevCounter+1)
      setCounter((prevCounter)=>prevCounter+1)
   }
  const removeValue=()=>{
    if(counter>0)
    setCounter(counter-1)
  }
  return (
    <>
<h1>Chai Aur React</h1>
<h2>Counter Value:{counter}</h2>

<button
 onClick={addValue}>Add value</button>
<br />
<button
onClick={removeValue}>Remove value</button>
</>
  )
}

export default App

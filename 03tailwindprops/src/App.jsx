import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"
function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"Megha",
    age:19
  }
  let arr=[1,2,3]
  return (
    <>
   <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
   <Card name="Anoushka" btnText="Click me"/>
   <Card name="Mayank"/>
    </>
  )
}

export default App
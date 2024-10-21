import { useState } from "react"

function App() {
  const [colour,setColour]= useState("olive")

  return (
    <>
      <div className="w-full h-screen"
      style={{backgroundColor:colour}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl">          
            <button 
            onClick={()=>setColour("green")}
            className="outline-none px-4  py-1 rounded-full text-white" 
            style={{backgroundColor:"green"}}>Green</button>
            <button 
            onClick={()=>setColour("blue")}
            className="outline-none px-4  py-1 rounded-full text-white" 
            style={{backgroundColor:"blue"}}>Blue</button>
            <button 
            onClick={()=>setColour("red")}
            className="outline-none px-4  py-1 rounded-full text-white" 
            style={{backgroundColor:"red"}}>Red</button>
            <button 
            onClick={()=>setColour("pink")}
            className="outline-none px-4  py-1 rounded-full" 
            style={{backgroundColor:"pink"}}>Pink</button>
            <button 
            onClick={()=>setColour("black")}
            className="outline-none px-4  py-1 rounded-full text-white" 
            style={{backgroundColor:"black"}}>Black</button>
            <button
            onClick={()=>setColour("white")}
            className="outline-none px-4  py-1 rounded-full" 
            style={{backgroundColor:"white"}}>White</button>
            </div>

        </div>
      </div>
    </>
  )
}

export default App

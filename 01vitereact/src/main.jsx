import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return(
    <div>
      <h1>Custom React!!</h1>
    </div>
  )
}
const anotherElement=(
  <a href="https://google.com" target="_blank">Visit Google</a>
)
const anotheruser="Megha";
const reactElement=React.createElement(
  "a",
  {
   href:"https://google.com", 
   target:"_blank"
  },
   "Click me to visit google as well",
   anotheruser
)
createRoot(document.getElementById('root')).render(

    // MyApp() --This is a function
    // <App />
    reactElement //this is an element 

)

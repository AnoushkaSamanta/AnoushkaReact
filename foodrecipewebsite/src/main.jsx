import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Explore from './components/Explore/Explore.jsx'
import Help from './components/Help/Help.jsx'
import Layout from './Layout.jsx'

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/'element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='explore' element={<Explore/>}/>
    <Route path='help' element={<Help/>}/>
  </Route>
))
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)

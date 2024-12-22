import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import RecipeContextProvider from './contexts/RecipeContextProvider'
function Layout() {
  return (
    <>
    <RecipeContextProvider>
      <Header/>
      
      <Outlet/>
      </RecipeContextProvider>
      <Footer/>
    </>
  )
}

export default Layout

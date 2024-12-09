import React from 'react'
import Bottom from './components/Bottom/Bottom'
import Top from './components/Top/Top'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Top/>
      <Outlet/>
      <Bottom/>
    </>
  )
}

export default Layout

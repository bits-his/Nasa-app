import React from 'react'
import Navbar from '../Navbars/MainNavbar'
import {
  Outlet,
} from 'react-router-dom'

function AuthenticatedContainer() {
  return (
    <div className="" style={{ height: '100vh' }}>
      <Navbar />
      <div style={{ height: 52 }} />
      <Outlet />
    </div>
  )
}

export default AuthenticatedContainer

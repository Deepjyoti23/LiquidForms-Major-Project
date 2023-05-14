import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar2 from './Navbar2'
import Footer from '../main/Footer'

const index = () => {
  return (
    <div>
      <Navbar2 />
      <Outlet/>
      <Footer />
    </div>
  )
}

export default index
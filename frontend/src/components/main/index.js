import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar3 from './Navbar3'
import Footer from './Footer'

const Main = () => {
  return (
    <div>
        
        <Navbar3 />
        <Outlet/>
        <Footer />
    </div>
  )
}

export default Main
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Navbar3 from './Navbar3'

const Main = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Navbar3 />
        <Outlet/>
    </div>
  )
}

export default Main
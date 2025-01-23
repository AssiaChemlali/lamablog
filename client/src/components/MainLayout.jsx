import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='px-4 md:px-8 xl:px-32 2xl:px-64'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default MainLayout

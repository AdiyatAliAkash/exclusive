import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layouts = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layouts
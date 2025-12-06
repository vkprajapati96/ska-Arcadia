import React from 'react'
import { Router,Route,Routes } from 'react-router-dom' 
import Home from './pages/Home'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const  App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default  App
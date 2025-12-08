import React from 'react'
import { Router,Route,Routes } from 'react-router-dom' 
import Home from './pages/Home'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ThankYou from './pages/ThankYou'

const  App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/privacypolicy' element={<PrivacyPolicy/>} />
      <Route path='/thankyou' element={<ThankYou/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default  App
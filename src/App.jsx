import React from 'react'
import { Router,Route,Routes } from 'react-router-dom' 
import Home from './pages/Home'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ThankYou from './pages/ThankYou'
import AutoPopupForm from './components/AutoPopupForm'

const  App = () => {
  return (
    <>
    <Navbar/>
    <AutoPopupForm/>
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
import React from 'react'
import { Router,Route,Routes } from 'react-router-dom' 
import Home from './pages/Home'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ThankYou from './pages/ThankYou'
import AutoPopupForm from './components/AutoPopupForm'
import ScrollTop from './components/ScrollTop'
import CallButton from './components/CallButton'
import WhatsappIcon from './components/WhatsappIcon'

const  App = () => {
  return (
    <>
    <CallButton/>
    <ScrollTop/>
    <Navbar/>
    <WhatsappIcon/>
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
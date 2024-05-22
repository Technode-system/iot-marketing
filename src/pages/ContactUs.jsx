import React from 'react'
import Navbar from '../components/Navbar'
import Footer from './Footer'
import ContactPage from '../components/ContactPage'

const ContactUs = () => {
  return (
    <div>
        <Navbar/>
       <div className='pt-20'><ContactPage /></div> 
        <Footer/>
    </div>
  )
}

export default ContactUs
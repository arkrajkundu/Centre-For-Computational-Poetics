import React from 'react'
import './ContactUsHeader.css'
import { assets } from '../../assets/assets'
import ContactUsMain from '../ContactUsMain/ContactUsMain'

const ContactUsHeader = () => {
  return (
    <div className='contact-us-header'>
      <div className="contact-us-header-image">
        <img src={assets.contactUsHeader} alt="" />
      </div>
      <div className="contact-us-details">
        <ContactUsMain />
      </div>
    </div>
  )
}

export default ContactUsHeader

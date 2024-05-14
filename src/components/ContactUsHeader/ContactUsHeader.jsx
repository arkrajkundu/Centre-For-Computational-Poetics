import React from 'react'
import './ContactUsHeader.css'
import { assets } from '../../assets/assets'

const ContactUsHeader = () => {
  return (
    <div className='contact-us-header'>
      <div className="contact-us-header-image">
        <img src={assets.contactUsHeader} alt="" />
      </div>
      <div className="contact-us-details"></div>
    </div>
  )
}

export default ContactUsHeader

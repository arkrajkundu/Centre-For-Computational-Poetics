import React from 'react'
import './ContactUsFooter.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const ContactUsFooter = () => {
  return (
    <>
      <div className='contact-us-footer'>
        <div className="icon">
          <img src={assets.addressIcon} alt="" />
        </div>
        <div className="text">
          <div className="contact-us-address">
            <div>
              Research & Development Building
            </div>
            <div>
              Inner Campus
            </div>
            <div>
              Birla Institute of Technology
            </div>
            <div>
              Mesra, Ranchi - 835215 (Jharkhand)
            </div>
          </div>
        </div>
      </div>
      <div className='contact-us-email-address'>
        <img src={assets.gmailIcon} alt="" />
        <Link to='mailto:cpc@bitmesra.ac.in'><div className="cpc-gmail">
          cpc@bitmesra.ac.in
        </div></Link>
      </div>
    </>
  )
}

export default ContactUsFooter

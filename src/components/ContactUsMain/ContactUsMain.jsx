import React from 'react'
import './ContactUsMain.css'

const ContactUsMain = () => {
  return (
    <div className='contact-us-main'>
      <h2 className='get-in-touch'>Get in touch</h2>
      <form action="">
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <div className="multi-fields">
          <input type="email" placeholder='Email' />
          <input type="text" placeholder='Phone' />
        </div>
      </form>
      <textarea className='contact-us-text-area' name="message" id="" placeholder='Enter your message'></textarea>
      <button className="contact-us-submit">Submit</button>
    </div>
  )
}

export default ContactUsMain

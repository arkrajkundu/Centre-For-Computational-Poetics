import React, { useRef, useState } from 'react'
import './ContactUsMain.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUsMain = () => {
  const form = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const notify = () => toast("Wow so easy !");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c1lij79', 'template_f85hey8', form.current, {
        publicKey: 'xxmdDaRzohFtWC5cL',
      })
      .then(
        (result) => {
          setSuccess(true);
          toast.success("Message sent!", { position: "bottom-center", toastId: "success toast" });
        },
        (error) => {
          setError(true);
          toast.error("Error", { position: "bottom-center", toastId: "error toast" });
        },
      );
  };

  return (
    <div className='contact-us-main'>
      <h2 className='get-in-touch'>Get in touch</h2>
      <form ref={form} onSubmit={sendEmail} action="">
        <div className="multi-fields">
          <input type="text" placeholder='First Name' name='first_name' required />
          <input type="text" placeholder='Last Name' name='last_name' />
        </div>
        <div className="multi-fields">
          <input type="email" placeholder='Email' name='email' required />
          <input type='tel' pattern='[0-9]{10}' placeholder='Phone' name='phone' required />
        </div>
        <div className="bottom">
          <textarea className='contact-us-text-area' name="message" id="" placeholder='Enter your message'></textarea>
          <button type='submit' value='Send' className="contact-us-submit">Submit</button>
        </div>
        <div className="toast">
          <ToastContainer />
        </div>
      </form>
    </div>
  )
}

export default ContactUsMain

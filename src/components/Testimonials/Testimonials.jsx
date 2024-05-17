import React from 'react'
import './Testimonials.css'
import Testimonial from '../Testimonial/Testimonial'
import { assets } from '../../assets/assets'

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <div className='testimonials-container'>
        <Testimonial img={assets.nks} desc={"\"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\""} by={"- Dr. Niraj Kumar Singh"} link={"https://www.bitmesra.ac.in/Display_My_Profile_00983KKj893L?id=aEt0TO9LALHVn1hxaxAuoA%253d%253d"} />
        <Testimonial img={assets.itu} desc={"\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\""} by={"- Dr. Itu Snigdh"} link={"https://www.bitmesra.ac.in/Display_My_Profile_00983KKj893L?id=7iHUTn%252f7FTED7PaxWEMljojalD1DgKZl%252bISaOV%252bBzLA%253d"} />
      </div>
    </div>
  )
}

export default Testimonials

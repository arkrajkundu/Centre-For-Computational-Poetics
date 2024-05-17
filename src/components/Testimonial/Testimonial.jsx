import React from 'react'
import './Testimonial.css'
import { Link } from 'react-router-dom'

const Testimonial = ({ img, desc, by, link }) => {
  return (
    <div className='testimonial'>
      <img src={img} alt="" className="testimonial-image" />
      <div className="testimonial-content">
        <p className="testimonial-para">{desc}</p>
        <div className="by">
          <Link to={link} target='_blank'><p className='by'>{by}</p></Link>
        </div>

      </div>

    </div>
  )
}

export default Testimonial

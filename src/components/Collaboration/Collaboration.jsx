import React from 'react'
import './Collaboration.css'

const Collaboration = ({ image, text }) => {
  return (
    <div className='collaboration-container'>
      <img className='collaboration-image' src={image} alt="" />
      <div className='collaboration-text'>{text}</div>
    </div>
  )
}

export default Collaboration

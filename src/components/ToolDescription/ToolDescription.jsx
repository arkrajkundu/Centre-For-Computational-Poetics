import React from 'react'
import './ToolDescription.css'
import { Link } from 'react-router-dom'

const ToolDescription = ({ image, title, desc, link }) => {
  return (
    <div className='tool-desc-container'>
      <img src={image} alt="" className="tool-image" />
      <p className="tool-description"><Link to={link}><span>{title}:</span></Link> {desc}</p>
    </div>
  )
}

export default ToolDescription

import React from 'react'
import './ToolDescription.css'

const ToolDescription = ({ image, desc }) => {
  return (
    <div className='tool-desc-container'>
      <img src={image} alt="" className="tool-image" />
      <p className="tool-description">{desc}</p>
    </div>
  )
}

export default ToolDescription

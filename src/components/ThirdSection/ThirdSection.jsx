import React from 'react'
import './ThirdSection.css'
import ToolDescription from '../ToolDescription/ToolDescription'

const ThirdSection = ({ image, desc }) => {
  return (
    <div className='third-section'>
      <h2>Resources</h2>
      <div className="resources-info">
        <ToolDescription className='tool-desc' image={assets.Text2MatraImage} desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"} />
      </div>
    </div>
  )
}

export default ThirdSection

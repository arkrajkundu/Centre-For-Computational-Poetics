import React from 'react'
import './SecondSection.css'
import ToolDescription from '../ToolDescription/ToolDescription'
import { assets } from '../../assets/assets'

const SecondSection = () => {
  return (
    <div className='second-section'>
      <h2>Poetry Analyzer Tools</h2>
      <div className="tools-info">
        <ToolDescription className='tool-desc' image={assets.Text2MatraImage} desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"} />
        <ToolDescription className='tool-desc' image={assets.RPaGenImage} desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"} />
        <ToolDescription className='tool-desc' image={assets.RMaGenImage} desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"} />
        <ToolDescription className='tool-desc' image={assets.FoSCal} desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"} />
        <ToolDescription className='tool-desc' image={assets.FVRCaiImage} desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"} />
        <ToolDescription className='tool-desc' image={assets.FvFoSCaiImage} desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"} />
      </div>
    </div>
  )
}

export default SecondSection

import React from 'react'
import './Collaborations.css'
import Collaboration from '../../components/Collaboration/Collaboration'
import { assets } from '../../assets/assets'

const Collaborations = () => {
  return (
    <div className='collaborations'>
      <Collaboration image={assets.collab1} text={<>An MoU for Research Collaboration between Birla Institute of Technology Mesra and Dr. Shyama Prasad Mukherjee University, Ranchi was signed on <strong>15th March, 2024</strong>.</>} />
    </div>
  )
}

export default Collaborations

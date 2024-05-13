/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './MainCard.css'

const MainCard = ({ text, img }) => {
  return (
    <div style={{ background: `url(${img})` }} className='card'>
      {text}
    </div>
  )
}

export default MainCard

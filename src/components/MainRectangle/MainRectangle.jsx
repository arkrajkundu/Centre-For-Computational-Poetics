/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './MainRectangle.css'

const MainRectangle = ({text}) => {
  return (
    <div className='rectangle'>
      <div className='card'>
      {text}
    </div>
    </div>
  )
}

export default MainRectangle

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './MainCard.css'

/* (props.text).toString() */

const MainCard = (props) => {
  const [text,SetText] = useState(props.text);
  return (
    // style={{ background: `url(${img})` }} 
    <div className='card-content'>
      {text}
    </div>
  )
}

export default MainCard

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './MainCard.css'

const MainCard = (props) => {
  const [text, setText] = useState(props.text);
  return (
    <div className='card-content'>
      {text}
    </div>
  )
}

export default MainCard

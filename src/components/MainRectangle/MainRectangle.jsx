/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './MainRectangle.css'
import { Link } from 'react-router-dom'

const MainRectangle = ({ header, texttop, textbottom, footer, invitelink }) => {
  return (
    <div className='rectangle'>
      <div className="rectangle-header">
        {header}
      </div>
      <div className='texttop'>
        {texttop}
      </div>
      <div className="textbottom">
        {textbottom}
      </div>
      <div className="rectangle-footer">
        {footer}
      </div>
      <div className="rectangle-invite">
        <Link to='contact-us'>{invitelink}</Link>
      </div>
    </div>
  )
}

export default MainRectangle

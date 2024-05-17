import React from 'react'
import './RightRectangle.css'
import { Link } from 'react-router-dom'

const RightRectangle = () => {
  return (
    <div className='right-rectangle'>
      <h2>Our current focus</h2>
      <ul className='less-imp'>
        <li>Poetry for Child Education</li>
        <li>The Therapeutic Power of Poetry</li>
      </ul>
      <ul className='more-imp'>
        <li>Mega Hindi Dictionary</li>
      </ul>
      <div className='contribute'>
        <p>Wish to contribute? <Link to='/contact-us'><span>Join us!</span></Link></p>
      </div>
    </div>
  )
}

export default RightRectangle

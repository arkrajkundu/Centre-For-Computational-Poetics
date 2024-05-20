import React from 'react'
import './NewsComponent.css'
import { assets } from '../../assets/assets'

const NewsComponent = ({ title, date }) => {
  return (
    <div className='news-container'>
      <div className="news-title">• {title}</div>
      <div className="news-date">Tentative Date: {date}</div>
    </div>
  )
}

export default NewsComponent

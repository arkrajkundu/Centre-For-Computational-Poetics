import React from 'react'
import './Event.css'

const Event = ({ title, duration }) => {
  return (
    <div className='event-container'>
      <div className="event-title">• {title}</div>
      <div className="event-duration">{duration}</div>
    </div>
  )
}

export default Event

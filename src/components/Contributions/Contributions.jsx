import React from 'react'
import './Contributions.css'

const Contributions = ({ tool, contributor }) => {
  return (
    <div className='contributions'>
      <ul>
        <li><span>{tool}</span>: {contributor}</li>
      </ul>
    </div>
  )
}

export default Contributions

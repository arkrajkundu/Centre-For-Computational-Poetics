import React from 'react'
import './Publication.css'

const Publication = ({ publicationDetail }) => {
  return (
    <li className='publication-list'>
      {publicationDetail}
    </li>
  )
}

export default Publication

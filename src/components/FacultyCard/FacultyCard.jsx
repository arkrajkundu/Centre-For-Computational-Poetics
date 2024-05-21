import React from 'react'
import './FacultyCard.css'
import { Link } from 'react-router-dom'

const FacultyCard = ({ img, name, title, designation, designation2, branch, email, college }) => {
  return (
    <div className='faculty-profile'>
      <img src={img} alt="" />
      <h4>{name}</h4>
      <p>{title}</p>
      <p className="designation2">{designation2}</p>
      <p className='designation'>{designation}</p>
      <p className='branch'>{branch}</p>
      <p className="college">{college}</p>
      <div className="icons">
        <Link to={email} target='_blank'><svg className='email' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-.141-6.333c.63 0 1.141-.512 1.141-1.142v-9.05c0-.63-.511-1.142-1.141-1.142h-13.718c-.63 0-1.141.512-1.141 1.142v9.05c0 .63.511 1.142 1.141 1.142h13.718zm-6.859-4.058l-6.228-4.321-.014 7.712h12.457v-7.712l-6.215 4.321zm5.913-6.609c-1.745 1.215-5.913 4.153-5.913 4.153l-5.947-4.153h11.86z" /></svg></Link>
      </div>
    </div >
  )
}

export default FacultyCard

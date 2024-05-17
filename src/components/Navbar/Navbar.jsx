/* eslint-disable no-unused-vars */

import React from 'react'
import './Navbar.css'
import Button from '../Button/Button'
import Searchbar from '../Searchbar/Searchbar'
import { Link } from 'react-router-dom'

const Navbar = ({ setShowLogin }) => {
  return (
    <div className='navbar'>
      <ul>
        <Link to='/'><Button text='Home' /></Link>
        <Link to='/about-us'><Button text='About Us' /></Link>
        <Link to='/collaborations'><Button text='Collaborations' /></Link>
        <Link to='/faculty-team'><Button text='Faculty Team' /></Link>
        <Link to='/students-team'><Button text='Students Team' /></Link>
        <Link to='/news'><Button text='News' /></Link>
        <Link to='/events'><Button text='Events' /></Link>
        <Link to='/publications'><Button text='Publications' /></Link>
        <Link to='/contact-us'><Button text='Contact Us' /></Link>
        <Button text='Log In' onClick={() => setShowLogin(true)} />
      </ul>

      {/* <div className='search-box'>
        <img className='search_icon' src="icon.png" alt="" />
        <input type="text" placeholder='Search' />


      </div> */}

    </div>
  )
}

export default Navbar

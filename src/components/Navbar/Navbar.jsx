/* eslint-disable no-unused-vars */

import React from 'react'
import './Navbar.css'
import Button from '../Button/Button'
import Searchbar from '../Searchbar/Searchbar'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <Button text='About Us'/>
        <Button text='Collaborations'/>
        <Button text='Faculty Team'/>
        <Button text='Students Team'/>
        <Button text='News'/>
        <Button text='Events'/>
        <Button text='Publications'/>
        <Button text='Contact Us'/>
        <Button text='Login'/>
        
        </ul>
        
        <div className='search-box'>
          <input type="text" placeholder='Search' />
          

        </div>
      
    </div>
  )
}

export default Navbar

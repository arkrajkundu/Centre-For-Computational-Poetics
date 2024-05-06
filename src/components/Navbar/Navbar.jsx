/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import Button from '../Button/Button'
import Searchbar from '../Searchbar/Searchbar'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Button text={"First"}/>
      <Button text={"Second"}/>
      <Button text={"Third"}/>
      <Button text={"Fourth"}/>
      <Button text={"Fifth"}/>
      <Button text={"Sixth"}/>
      <Button text={"Seventh"}/>
      <Button text={"Eighth"}/>
      <Button text={"Ninth"}/>
      <Searchbar/>
    </div>
  )
}

export default Navbar

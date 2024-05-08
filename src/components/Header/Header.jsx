/* eslint-disable no-unused-vars */
import React from 'react'
import './Header.css'
import Logo from '../Logo/Logo'
import { assets } from '../../assets/assets'
import Title from '../Title/Title'

const Header = () => {
  return (
    <>
    <div className='header'>
      <Logo source={assets.CollegeLogo} />
      <Logo source={assets.LabLogo} />
      <Title />
    </div>
    <img className='border_first' src="border.png" alt="" />
    <img className='border' src="border.png" alt="" />
    <img className='border' src="border.png" alt="" />
    <img className='border' src="border.png" alt="" />
    <img className='border' src="border.png" alt="" />
    <img className='border' src="border.png" alt="" />
    <img className='border' src="border.png" alt="" />
    <img className='border' src="border.png" alt="" />
    <img className='border' src="border.png" alt="" />
    <img className='border_last' src="border.png" alt="" />

    
    </>
    
  )
}

export default Header

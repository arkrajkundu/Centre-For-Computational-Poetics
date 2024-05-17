/* eslint-disable no-unused-vars */
import React from 'react'
import './Header.css'
import Logo from '../Logo/Logo'
import { assets } from '../../assets/assets'
import Title from '../Title/Title'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='header'>
        <Link to='/'><Logo source={assets.CollegeLogo} /></Link>
        <Logo source={assets.LabLogo} />
        <Title />
      </div>
    </>

  )
}

export default Header

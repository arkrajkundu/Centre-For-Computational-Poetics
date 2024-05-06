/* eslint-disable no-unused-vars */
import React from 'react'
import './Header.css'
import Logo from '../Logo/Logo'
import { assets } from '../../assets/assets'
import Title from '../Title/Title'

const Header = () => {
  return (
    <div className='header'>
      <Logo source={assets.CollegeLogo} />
      <Logo source={assets.LabLogo} />
      <Title />
    </div>
  )
}

export default Header

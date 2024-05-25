/* eslint-disable no-unused-vars */

import React, { useContext } from 'react'
import './Navbar.css'
import Button from '../Button/Button'
import Searchbar from '../Searchbar/Searchbar'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../../contexts/LoginContext'
import { assets } from '../../assets/assets'

const Navbar = ({ setShowLogin }) => {

  const navigate = useNavigate();
  const { token, setToken } = useContext(LoginContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

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
        <Link to='/home/RDL'><Button text='Resources' /></Link>
        <Link to='/contact-us'><Button text='Contact Us' /></Link>
        {!token ? <Button text='Log In' onClick={setShowLogin} /> : <Button text='Log Out' onClick={logout} />}


        {/* <Button text='Log In' onClick={setShowLogin} />
        {!token ? <Button text='Log In' onClick={setShowLogin} />
          :
          <Button text='Log Out' onClick={logout} />} */}
      </ul>
    </div>
  )
}

export default Navbar

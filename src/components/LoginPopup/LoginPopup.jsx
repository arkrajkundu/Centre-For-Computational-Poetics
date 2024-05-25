/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { LoginContext } from '../../contexts/LoginContext'

const LoginPopup = ({ setShowLogin }) => {

  const url = "http://localhost:5000";
  const { setToken } = useContext(LoginContext)

  const [currState, setCurrState] = useState("Log In");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Log In") {
      newUrl += "/api/user/login";
    }
    else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    }
    else {
      alert(response.data.message);
    }
  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => { setShowLogin(false) }} src={assets.crossIcon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Log In" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
          <input type="email" onChange={onChangeHandler} value={data.email} name='email' placeholder='Your Email' required />
          <input type="password" onChange={onChangeHandler} value={data.password} name='password' placeholder='Password' required />
        </div>
        <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Log In"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
        </div>
        {currState === "Log In" ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p> : <p>Already have an account? <span onClick={() => setCurrState("Log In")}>Login here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup
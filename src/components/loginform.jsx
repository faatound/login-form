import React from 'react'
import './loginform.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


const Loginform = () => {
  return (
    <div className='wrapper'>
      <form action=''>
      <h1>Login</h1>
      <div className="input-box">
        <input type='text' placeholder="username" required></input>
        <FaUser className='icon' />
      </div>
      <div className="input-box">
        <input type='password' placeholder="password" required></input>
        <FaLock className='icon' />
      </div>

      <div className="remember-forgot">
        <label> <input type='checkbox'/> Remember Me</label>
        <a href="#">Forgot Password</a>
      </div>

      <button type="submit">Login</button>
      <div className="register-link">
        <p>Don't have an account ?<a href="#"> Register</a></p>
      </div>
      </form>
    </div>
  )
}

export default Loginform

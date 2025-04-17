import React from 'react'
import './LogIn.css'
import { useNavigate } from 'react-router-dom';
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import google from './images/google.png'

function LogIn() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/profile');
  };

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <div className="login-form">
      <input type="text" placeholder="Enter your email or username" required />
        <input type="password" required />
        <button className="email-login" onClick={handleNavigation}>Log In</button>
        <div className="divider">or use one of these options</div>
        <div className="social-login">
          <button className="social-button facebook" onClick={handleNavigation}><img src={facebook} width="20px" />Facebook</button>
          <button className="social-button google" onClick={handleNavigation}><img src={google} width="20px" />Google</button>
          <button className="social-button instagram" onClick={handleNavigation}><img src={instagram} width="20px" />Instagram</button>
        </div>
      </div>
    </div>
  )
}

export default LogIn
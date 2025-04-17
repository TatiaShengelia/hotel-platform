import React from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom';
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import google from './images/google.png'

function SignUp() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/profile');
  };
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className="signup-form">
        <input type="email" placeholder='Enter email address' required />
        <input type="password" placeholder='Enter password' required />
        <input type='tel' placeholder='Enter phone number' required />
        <label for='birth-date' id='birth-date-label'>Enter birth date:</label>
        <input type='date' required id='birth-date' />
        <button className="email-signup" onClick={handleNavigation}>Sign Up</button>
        <div className="divider">or use one of these options</div>
        <div className="social-signup">
          <button className="social-button facebook" onClick={handleNavigation}><img src={facebook} width="20px" />Facebook</button>
          <button className="social-button google" onClick={handleNavigation}><img src={google} width="20px" />Google</button>
          <button className="social-button instagram" onClick={handleNavigation}><img src={instagram} width="20px" />Instagram</button>
        </div>
        <div className="terms">
          By creating an account, you agree with our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Statement</a>.
        </div>
      </div>
      <footer className='sign-up-footer'>
        <p>All rights reserved.</p>
      </footer>
    </div>
  )
}

export default SignUp
import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom';
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import linkedin from './images/linkedin.png'
import x from './images/x.webp'

function Footer() {
    const navigate = useNavigate();

    const handleNavigation1 = () => {
        navigate('/signUp');
    };
    const handleNavigation2 = () => {
        navigate('/logIn');
    };

    return (
        <footer className='footer'>
            <div className='about-us'>
                <h3>About Us</h3>
                <p className='footer-p'>our goal is to create comfortable and <br /> safe environment for everyone</p>
                <p className='footer-p'>location: some location here</p>
                <p className='footer-p'>Email: booking@gmail.com</p>
                <p className='footer-p'>Phone Number: +995-595-655-771</p>
            </div>
            <div className='signup-register'>
                <button className="sign-button" onClick={handleNavigation1}>Sign Up</button>
                <button className="sign-button" onClick={handleNavigation2}>Log In</button>
                <div className='links-1'>
                    <a href='https://www.facebook.com/' target='_blank'><img src={facebook} width="50px" /></a>
                    <a href='https://www.instagram.com/' target='_blank'><img src={instagram} width="55px" /></a>
                </div>
                <div className='links-2'>
                    <a href='https://www.x.com/' target='_blank'><img src={x} width="35px" /></a>
                    <a href='https://www.linkedin.com/' target='_blank'><img src={linkedin} width="40px" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
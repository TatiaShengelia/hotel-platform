import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'
import uk from './images/uk.jpg'
import georgia from './images/georgia.png'
import LanguageSelect from './LanguageSelect';

function Navigation() {
  const options = [
    { value: 'English', label: 'English', img: uk },
    { value: 'Georgian', label: 'ქართული', img: georgia },
  ];
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink >
      <NavLink to="/booked" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Booked</NavLink >
      <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact me</NavLink >
      <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Profile</NavLink >
      <LanguageSelect options={options} className='language' />
    </nav>
  );
}

export default Navigation;

import React from 'react'
import './Profile.css'
import clark from './images/clarkKent.jpg'

function Profile() {
  return (
    <div className='profile'>
      <img src={clark} height="200px" />
      <h3>Name: Clark Kent</h3>
      <h3>Email: ClarkKent@gmail.com</h3>
      <h3>Phone Number: (555) 555-1234</h3>
      <h3>Birthdate: May 3, 1987</h3>
      <a href='https://smallville.fandom.com/wiki/Clark_Kent' target='_blank'>Link for more information</a>
    </div>
  )
}

export default Profile
import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-me'>
      <h1>Contact Me Form</h1>

      <p>Email: booking@gmail.com</p>
      <p>Phone Number: +995-595-655-771</p>

      <p>Feel free to contact us or fill out this form and we will contact you</p>

      <label for="name_id" className="contact-label">Full Name</label>
      <input type="text" id="name_id" placeholder="Enter your full name" className="contact-input" />

      <label for="email_id" className="contact-label">Email</label>
      <input type="email" id="email_id" placeholder="Enter your email" className="contact-input" />

      <label for="age_id" className="contact-label">Age</label>
      <input type="number" id="age_id" placeholder="Enter your age" className="contact-input" />

      <label for="satisfactory_id" className="contact-label">Are you satisfied with our website?</label>
      <select id="satisfactory_id">
        <option value="" selected hidden>Choose</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="Maybe">Maybe</option>
        <option value="Prefer Not To Answer">Prefer Not To Answer</option>
      </select>

      <label for='textarea' className='contact-label'>Message</label>
      <textarea id='textarea' className='conact-input' />

      <div>
        <input type='checkbox' id="subscribe" />
        <label for='subscribe'>i would like subscribe and receive newsletter</label>
      </div>

      <button type="submit" className='submit-button'>Submit</button>
    </div>
  )
}

export default Contact
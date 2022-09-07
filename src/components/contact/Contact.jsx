import React from 'react'
import './contact.css'
import { navigationLinks } from '../../helper/Navigation/navigationLinks'

function createLinks() {
    return navigationLinks.map((e, idx) => (
      <p key={idx}><a href={e.ref}>{e.name}</a></p>
    ))
  }

function Contact() {
  return (
    <div className="contact__container" id="contact">
      <div className="contact__data__links">
        <div>
          <p>Hoboken, NJ</p>
          <p>Rishi Singh</p>
          <p>rishimsingh@outlook.com</p>
        </div>
        <div>
          {createLinks()}
        </div>
      </div>
    </div>
  )
}

export default Contact
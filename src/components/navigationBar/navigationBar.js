import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import './navigation.css'
import Nav from 'react-bootstrap/Nav'
import { navigationLinks } from '../../helper/Navigation/navigationLinks'
import mixpanel from 'mixpanel-browser'

function createLinks() {
  return navigationLinks.map((e, idx) => (
    <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
  ))
}

function navigationBar() {

  mixpanel.track("page_view");

  return (
    <div id='Home'>
      <Navbar className="navigation__container" style={{
        zIndex: '2', position: 'fixed', top: '0', width: '100%'
      }} 
      collapseOnSelect
        expand="md">
        <Navbar.Brand style={{ marginLeft: '1rem' }} href="#home">Rishi Singh</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{ justifyContent: 'flex-end', marginRight: '1rem', borderColor: 'none' }}>
          <Nav className="links" style={{ margin: '0 1rem' }}>
            {createLinks()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
  )
}

export default navigationBar
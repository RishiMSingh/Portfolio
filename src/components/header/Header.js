import React from 'react'
import './header.css'
import Typed from 'react-typed';
import mixpanel from 'mixpanel-browser';

function Header() {

  mixpanel.track("page_view");
  return (
    <div className="main-info">
      <h1>Hi my name is Rishi</h1>
      <Typed 
        strings={[
            "I am an aspiring",
          "Machine Learning Engineer", 
          
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
      />
      </div>
  )
}

export default Header
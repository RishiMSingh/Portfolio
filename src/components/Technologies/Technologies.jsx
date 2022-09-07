import React from 'react'
import DevIcon from "devicon-react-svg"
import {techs} from '../../helper/technology/tech'
import './technologies.css'
import mixpanel from 'mixpanel-browser'



function Technologies() {

  mixpanel.track("page_view");




  return (
    <div className="technologies__container" id="technologies">
      <div>
        <h1 style={{textAlign: 'center', color:'white'}}>Some of the techonologies that I use</h1>
      </div>
      <div className="tech__cards__container">
        {techs.map((e, idx) => {
          return (
            <div key={idx} className="tech__card">
              <DevIcon className="tech__icons" icon={e.iconName} />
              <span style={{ margin: '5px', fontSize: '1.5rem'}}>{e.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Technologies
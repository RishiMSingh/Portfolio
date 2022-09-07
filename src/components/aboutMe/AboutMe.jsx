import React from 'react'
import './aboutMe.css'
import person from '../aboutMe/person/person.png'
import mixpanel from 'mixpanel-browser';

function AboutMe() {
  mixpanel.track("page_view");
  return (
    <div className="about__container" id="about-me">
     <div>
      <img src={person} alt="person icon"/>
     </div>
     <div className="about__text">
       <h1>ABOUT ME</h1>
       <p>Hi, I'm <b>Rishi </b>currently I am pursuing a Masters degree in Machine Learning with a graduation date of July 2023.</p>
       <p><b>What am I currently doing?</b>
       I am a student at Stevens Institute of Technology developing my technical and theoretical knowledge in Machine Learning. Along with my studies I am researching and implementing machine learning and artificial intelligence techniques specifically convolution neural networks to classify fetal ultrasound images into correct and incorrect categories. I have also been working on my full stack development skills by creating an interactive dashboard for a travel-tech blockchain start up.</p>

<p><b>My Aspirations:</b> I want to develop my knowledge of technology and be involved with upcoming machine learning & artificial intelligence projects.

I want continue working with new technologies and improve my soft and technical skills to become the better professional in order to change how people use technology for the better. I am currently seeking full-time opportunities in the domain of Machine Learning..</p>
<p>Check out my Linkedin profile: <a href='https://www.linkedin.com/in/rishimsingh/'>Rishi Singh</a></p>
<p>Check out my publication - <a href='https://link.springer.com/chapter/10.1007/978-3-030-82269-9_8'>Classification of First Trimester Ultrasound Images Using Deep Convolutional Neural Network</a></p>
     </div>
    </div>
  )
}

export default AboutMe
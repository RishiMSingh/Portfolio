import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from "react-icons/fa";


function Timeline() {
  return (
    <div className='timeline'>
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="May 2023"
    iconStyle={{ background: '#394648', color: '#394648' }}
    icon={<FaGraduationCap/>}
  >
    <h3 className="vertical-timeline-element-title">Stevens Institute of Technology</h3>
    <h4 className="vertical-timeline-element-subtitle">Master of Science in Machine Learning</h4>
    <p>
    <b>•	Expected Graduation</b>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="September 2022 - December 2022"
    iconStyle={{ background: '#394648', color: '#394648' }}

  >
    <h3 className="vertical-timeline-element-title">Stevens Institute of Technology</h3>
    <h4 className="vertical-timeline-element-subtitle">CS556 Mathematical Foundations of Machine Learning Teaching Assistant</h4>
    <p>
    •	Maintaining slack workspace to monitor student questions and grading assignments, quizzes along with providing weekly tutoring sessions to 89 students
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="June 2022 - August 2022"
    iconStyle={{ background: '#394648', color: '#394648' }}
  >
    <h3 className="vertical-timeline-element-title">Xeni</h3>
    <h4 className="vertical-timeline-element-subtitle">Machine Learning  &#38; Data Analytics Intern </h4>
    <p>
    •	Enhanced an interactive real-time Super Admin dashboard to visualize key performance indicators of 180 clients for the senior management team
    <p>•	Determined trends of user behavior and presented analyses to management resulting in representing the company at a global conference by leading information booth presenting to over 100 future clients</p>

    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="August 2021"
    iconStyle={{ background: '#394648', color: '#394648' }}
  >
    <h3 className="vertical-timeline-element-title">Stevens Institute of Technology</h3>
    <h4 className="vertical-timeline-element-subtitle">Master of Science in Machine Learning</h4>
    <p>
      Began my Masters in Machine Learning in Hoboken NJ
      <p>• Related Courses: Big Data Technologies, Mathematical Foundations of Machine Learning, Web Mining, Machine Learning Fundamentals &#38; Applications, Cognitive Computing, Knowledge Discovery and Data Mining</p>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="July 2021"
    iconStyle={{ background: '#394648', color: '#394648' }}
  >
    <h3 className="vertical-timeline-element-title">Classification of First Trimester Ultrasound Images Using Deep Convolutional Neural Network</h3>
    <h4 className="vertical-timeline-element-subtitle">Publication</h4>
    <p>
    •	Published my first research paper and recieved Best Impact Award in the 2021 International Conference on Applied Intelligence and Informatics <a href='https://link.springer.com/chapter/10.1007/978-3-030-82269-9_8'>[Click Here]</a>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="June 2021"
    iconStyle={{ background: '#394648', color: '#394648' }}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Science</h3>
    <h4 className="vertical-timeline-element-subtitle">Graduated with First Class Honors and a GPA of 3.83</h4>
    <p>
    • Recieved Second Prize for Outstanding Performance (Computer Science)
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2018 - 2021"
    iconStyle={{ background: '#394648', color: '#394648' }}
  >
    <h3 className="vertical-timeline-element-title">Nottingham Trent University, United Kingdom</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor of Science in Computer Science</h4>
    <p>
      <b>• Relevant Courses:</b> Machine Learning/Data Analysis | Web Programming | Computer Technology and Mathematics | Software Engineering | Service Centric Cloud Computing | Mobile Platform Applications | Artificial Intelligence | <b>Thesis</b>
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>

    </div>
  )
}

export default Timeline
import React from 'react'
import './About.css'
import about_img from '../../assets/profile.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src="" alt="" />
      </div>
      <div className="about-sections">
          <div className="about-left">
            <img src={about_img} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
                <p>I'm a young web developer with over 2 years of experience in web development. I've been on a couple of projects both personal and client standard</p>
                <p> Eager to learn and improve. I'm opened to every opportunity that will help me grow</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"> <p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"> <p>React JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"> <p>Node.JS </p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"> <p>Spring Boot</p><hr style={{width:"50%"}} /></div>
                 </div>

          </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>18+</h1>
          <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr />
         <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
         <div className="about-achievement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default About

import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile} alt="" />
      <h1><span>I'm Enoch Sarkodie,</span> web developer based in Ghana</h1>
      <p>I'm a full stack developer from Takoradi, Here's what I have and can do as we progress. I'll add some details as we progress for now i can't think of any</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
        </div>  
     </div>
  )
}

export default Hero
 
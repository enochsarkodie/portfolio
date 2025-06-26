import React from 'react'
import './Contact.css'
import call_icon from '../../assets/call_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Lets talk</h1>
            <p>I'm currently available for anything you'd want me to work. Let's have a convo and see how best we can work </p>
            <div className="contact-details">
                <div className="contact-detail"> 
                    <img src={mail_icon} alt="" /><p>enochsarkodie07@gmail.com</p>
                </div>
                 <div className="contact-detail">  
                    <img src={call_icon} alt="" /><p>+233 209191598</p>
                </div>
                 <div className="contact-detail"> 
                    <img src={location_icon} alt="" /><p>Takoradi, Ghana</p>
                </div>
            </div>
        </div>
        <form  className="contact-right">
             <label htmlFor=""> Your name</label>
             <input type="text" placeholder="enter your name" name="name" id="" />
             <label htmlFor="">Your email</label>
             <input type="email" placeholder='enter your email' name="email" id="" />
             <label htmlFor="">Write your message</label>
             <textarea name="message" id="" rows="8" placeholder='enter your message'></textarea>
             <button type="submit" className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

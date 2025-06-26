import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

  const [menu, setMenu] =useState('home')
  return (
    <div className='navbar'>
      <span>E<a>noch</a></span>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
          </ul>
          <div className="nav-connect">Connect with me</div>
    </div>
  )
}


export default Navbar

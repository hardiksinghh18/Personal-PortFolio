import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
            <header className="header">
    <a href="#" className="logo">Hardik Singh</a>

    <i className='bx bx-menu' id="menu-box"></i>

    <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#skill">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>

      
    </nav>
</header>
    </div>
  )
}

export default Navbar

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {

  const[showCross,setShowcross]=useState(false)

  return (
    <div>
      <header className="header" id='header'>
        <a href="#" className="logo">Hardik Singh</a>

     {!showCross&&   <i className='bx bx-menu menu-box' onClick={()=>setShowcross(true)}></i>}
       {showCross&& <i className='bx bx-x crossBar' onClick={()=>setShowcross(false)}></i>}

   { showCross&&    <nav className="navbar navbarExpand" onClick={()=>setShowcross(false)}>
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#skill">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>


        </nav>}
      </header>
    </div>
  )
}

export default Navbar

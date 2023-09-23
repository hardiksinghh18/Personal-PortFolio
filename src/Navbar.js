import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {

  const[showNav,setShowNav]=useState(false)

  const showNavBar=()=>{
    setShowNav(true)

  }
  const hideNavBar=()=>{
    setShowNav(false)
  }
  

  return (
    <div>
      <header className="header" id='header'>
        <a href="#" className="logo">Hardik</a>

     {/* {!showNav&&   <i className='bx bx-menu menu-box' onClick={showNavBar}></i>} */}
     {!showNav&&   <i className='bx bx-grid-alt  menu-box' onClick={showNavBar}></i>}
       {showNav&& <i className='bx bx-x crossBar' onClick={hideNavBar}></i>}

     <nav className={showNav?"navbar navbarActive":"navbar"} onClick={()=>setShowNav(false)}>
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#skill">Skills</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>


        </nav>
      </header>
    </div>
  )
}

export default Navbar

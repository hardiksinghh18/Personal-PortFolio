import React, { useState, useEffect } from 'react'
const Navbar = () => {

  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    const handleResize = () => {
      if (window.innerWidth > 900 && showNav) {
        setShowNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showNav]);

  const showNavBar = () => {
    setShowNav(true)

  }
  const hideNavBar = () => {
    setShowNav(false)
  }


  return (
    <div>
      <header className="header" id='header'>
        <a href="#home" className="logo highlightHeading textGradient">Hardik</a>

        {!showNav && <i className='bx bx-menu menu-box' onClick={showNavBar}></i>}
        {/* {!showNav&&   <i className='bx bx-grid-alt  menu-box' onClick={showNavBar}></i>} */}
        {showNav && <i className='bx bx-x crossBar' onClick={hideNavBar}></i>}

        {showNav && <div className="navOverlay" onClick={hideNavBar}></div>}

        <nav className={showNav ? "navbar navbarActive" : "navbar"} onClick={() => setShowNav(false)}>
          <a href="#home" className="active">Home</a>
          <a href="#workExperience">Experience</a>
          <a href="#skillsNew">Skills</a>
          {/* <a href="#services">Services</a> */}
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>


        </nav>
      </header>
    </div>
  )
}

export default Navbar

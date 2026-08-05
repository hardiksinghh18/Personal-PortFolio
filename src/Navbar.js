import React, { useState, useEffect } from 'react'
import signature from './images/signature.png'
import { useLenis } from 'lenis/react'

const Navbar = () => {

  const [showNav, setShowNav] = useState(false)
  const lenis = useLenis()

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

  const handleScroll = (e, id) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      window.location.href = `/${id}`;
      return;
    }
    if (lenis) {
      lenis.scrollTo(id, { offset: -100 });
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setShowNav(false);
  };

  return (
    <div>
      <header className="header" id='header'>
        <a href="/#home" onClick={(e) => handleScroll(e, "#home")} className="logo">
          <img src={signature} alt="Hardik" className="nav-logo-img" />
        </a>

        {!showNav && <i className='bx bx-menu menu-box' onClick={showNavBar}></i>}
        {/* {!showNav&&   <i className='bx bx-grid-alt  menu-box' onClick={showNavBar}></i>} */}
        {showNav && <i className='bx bx-x crossBar' onClick={hideNavBar}></i>}

        {showNav && <div className="navOverlay" onClick={hideNavBar}></div>}

        <nav className={showNav ? "navbar navbarActive" : "navbar"}>
          <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="active">Home</a>
          <a href="#workExperience" onClick={(e) => handleScroll(e, "#workExperience")}>Experience</a>
          <a href="#skillsNew" onClick={(e) => handleScroll(e, "#skillsNew")}>Skills</a>
          <a href="#projects" onClick={(e) => handleScroll(e, "#projects")}>Projects</a>
          <a href="#blogs" onClick={(e) => handleScroll(e, "#blogs")}>Blogs</a>
        </nav>
      </header>
    </div>
  )
}

export default Navbar

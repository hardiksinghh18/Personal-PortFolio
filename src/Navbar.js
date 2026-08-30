import React, { useState, useEffect } from 'react';
import { useLenis } from 'lenis/react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const lenis = useLenis();

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'workExperience', 'skillsNew', 'projects', 'blogs'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      window.location.href = `/${id}`;
      return;
    }
    if (lenis) {
      lenis.scrollTo(id, { offset: -70 });
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveSection(id.replace('#', ''));
  };

  return (
    <header className="header" id="header">
      <div className="header-inner">
        <a href="/#home" onClick={(e) => handleScroll(e, "#home")} className="logo-text-link">
          Hardik
        </a>

        <nav className="navbar">
          <a
            href="#workExperience"
            onClick={(e) => handleScroll(e, "#workExperience")}
            className={`nav-link ${activeSection === 'workExperience' ? 'active' : ''}`}
          >
            Experience
          </a>
          <a
            href="#skillsNew"
            onClick={(e) => handleScroll(e, "#skillsNew")}
            className={`nav-link ${activeSection === 'skillsNew' ? 'active' : ''}`}
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "#projects")}
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          >
            Projects
          </a>
          <a
            href="#blogs"
            onClick={(e) => handleScroll(e, "#blogs")}
            className={`nav-link nav-link-desktop ${activeSection === 'blogs' ? 'active' : ''}`}
          >
            Blogs
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

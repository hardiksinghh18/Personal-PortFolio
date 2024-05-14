import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import About from './About'
import Service from './Service'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'
import Footer from './components/Footer'
import LinkFlag from './components/LinkFlag'
import AboutNew from './AboutNew'
import SkillsNew from './SkillsNew'

const Home = () => {

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
      document.getElementById("header").style.transition = "all ease 1s";
    } else {
      document.getElementById("header").style.top = "-130px";
    }
    prevScrollpos = currentScrollPos;
  }
  return (
    <div >
      <Navbar />
      <LinkFlag/>
     <div className='homepage'>
     <HeroSection />
      {/* <About /> */}
      <AboutNew />
      {/* <Skills /> */}
      <SkillsNew/>
      {/* <Service /> */}
      <Projects />
      <Contact />
      <Footer />
     </div>
      
    </div>
  )
}

export default Home

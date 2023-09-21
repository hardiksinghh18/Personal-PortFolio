import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import About from './About'
import Service from './Service'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'

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
        <div>
            <Navbar />
            <HeroSection/>
            <About/>
            <Skills/>
            <Service/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Home

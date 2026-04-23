import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Contact from './Contact'
import Projects from './Projects'
import Footer from './components/Footer'
import LinkFlag from './components/LinkFlag'
import WorkExperience from './WorkExperience'
import SkillsNew from './SkillsNew'
import TechQuotes from './components/TechQuotes'
import ThemeToggle from './components/ThemeToggle'

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
      <ThemeToggle />
      <Navbar />
      <LinkFlag />
      <div className='homepage'>
        <HeroSection />
        <WorkExperience />
        <SkillsNew />
        <Projects />
        <Contact />
        <TechQuotes />
        <Footer />
      </div>

    </div>
  )
}

export default Home

import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Contact from './Contact'
import Projects from './Projects'
import Footer from './components/Footer'
import WorkExperience from './WorkExperience'
import SkillsNew from './SkillsNew'
import Quotes from './components/Quotes'
import ThemeToggle from './components/ThemeToggle'
import Blogs from './Blogs'
import GithubContributions from './components/GithubContributions'

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
      <div className='homepage'>
        <HeroSection />
        <WorkExperience />
        <GithubContributions />
        <Projects />
        <SkillsNew />
        <Blogs />
        <Contact />
        <Quotes />
        <Footer />
      </div>

    </div>
  )
}

export default Home

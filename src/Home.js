import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import About from './About'
import Service from './Service'
import Skills from './Skills'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection/>
            <About/>
            <Skills/>
            <Service/>
        </div>
    )
}

export default Home

import React from 'react'
import homeImage from './images/homeImage.png'
import {ReactTyped} from 'react-typed'
import hardikAI from './images/hardikAI.png'
import newFace from './images/newFace.png'


const HeroSection = () => {


  return (
    <div>
      <section className="home" id="home"  >
      



        <div className="homeContent" data-aos="fade-right">
          <h3>Hi ! 👋</h3>
          <h2 >I'm<span className='textGradient'> Hardik Singh</span> </h2>
          <h4>And I'm a <span className="highlightHeading" id=' typingtext' ><ReactTyped strings={['Full-Stack Developer','Freelancer', 'Ui/Ux Designer']} typeSpeed={100} loop={true} /></span></h4>
          <p className='mainLine'>I speak in <span className='code'>&lt;code/&gt; </span> , so you don't have to</p>
<p >Building the future of the web, one pixel at a time – your vision, my code, a perfect match for a standout online presence.</p>

          <div className="socialMedia" data-aos="fade-left" >
            <a href="https://github.com/hardiksinghh18" target='_blank'  ><i className='bx bxl-github' ></i></a>
            <a href="https://www.linkedin.com/in/hardik-singh-391946278/" target='_blank'  ><i className='bx bxl-linkedin' ></i></a>
            <a href="https://www.instagram.com/hardiksingh18_/" target='_blank'><i className='bx bxl-instagram' ></i></a>
            <a href="#contact" ><i class='bx bx-envelope'></i></a>

          </div>

          <div className='resumeBtn'>
            <a href="https://firebasestorage.googleapis.com/v0/b/personal-portfolio-e780a.appspot.com/o/Hardik_Singh_Frontend_Resume.pdf?alt=media&token=e8c9053a-e413-453d-8ee0-9f66aed952c1" download target='_blank' className="btn textGradient">Download Resume</a>

          </div>

        </div>

        <div className="homeImage" data-aos="fade-left">
          {/* <img src="images/homeImage.png" alt="" /> */}
          {/* <img src={hardikAI} alt="" /> */}
          <img src={newFace} alt="" />
        </div>
      </section>
    </div>
  )
}

export default HeroSection

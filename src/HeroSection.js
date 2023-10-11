import React from 'react'
import homeImage from './images/homeImage.png'
import ReactTyped from 'react-typed'


const HeroSection = () => {


  return (
    <div>
      <section className="home" id="home"  >
        <div className="homeContent"  data-aos="fade-right">
          <h4>Hey there !! It's me</h4>
          <h1>Hardik Singh </h1>
          <h3>And I'm a <span className="highlightHeading" id=' typingtext' ><ReactTyped strings={['Frontend Developer','Ui/Ux Designer']} typeSpeed={100} loop={true}/></span></h3>
          <p>I'm a passionate and innovative Front-End Web Developer with a keen focus on building dynamic user interfaces using React.js.   My proficiency in HTML, CSS, and JavaScript complements my expertise in React, allowing me to create seamless, interactive, and intuitive user experiences that captivate audiences.</p>


          <div className="socialMedia" data-aos="fade-left" >
            <a href="https://github.com/hardiksinghh18" target='_blank'  ><i className='bx bxl-github' ></i></a>
            <a href="https://www.linkedin.com/in/hardik-singh-391946278/" target='_blank'  ><i className='bx bxl-linkedin' ></i></a>
            <a href="https://www.instagram.com/hardiksingh18_/" target='_blank'><i className='bx bxl-instagram' ></i></a>
            <a href="#contact" ><i class='bx bx-envelope'></i></a>

          </div>

          <a href="https://firebasestorage.googleapis.com/v0/b/personal-portfolio-e780a.appspot.com/o/Hardik_Singh_Frontend_Resume.pdf?alt=media&token=0ea8f84a-6d16-4151-ae51-3c7ed0158d71" download target='_blank'  className="btn">Download Resume</a>
        </div>

        <div className="homeImage" data-aos="fade-left">
          <img src="images/homeImage.png" alt="" />
          <img src={homeImage} alt="" />
        </div>
      </section>
    </div>
  )
}

export default HeroSection

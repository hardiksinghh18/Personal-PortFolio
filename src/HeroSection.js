import { ReactTyped } from 'react-typed'
import newFace from './images/newFace.png'


const HeroSection = () => {


  return (
    <div>
      <section className="home" id="home"  >
        <div className="homeContent">
          <h3>Hi ! 👋</h3>
          <h2 >I'm<span className='textGradient'> Hardik Singh</span> </h2>
          <h4>And I'm a <span className="highlightHeading" id=' typingtext' ><ReactTyped strings={['Full-Stack Developer', 'Freelancer']} typeSpeed={100} loop={true} /></span></h4>
          <p className='mainLine'>I speak in <span className='code'>&lt;code/&gt; </span> , so you don't have to</p>
          <p >Specializing in React.js, Node.js, and AI integrations. I build scalable full-stack applications and RESTful APIs with a focus on web performance and seamless user experiences.</p>

          <div className="socialMedia">
            <a href="https://github.com/hardiksinghh18" target='_blank' rel='noreferrer'><i className='bx bxl-github' ></i></a>
            <a href="https://www.linkedin.com/in/hardik-singh-391946278/" target='_blank' rel='noreferrer'><i className='bx bxl-linkedin' ></i></a>
            <a href="https://www.instagram.com/hardiksingh18_/" target='_blank' rel='noreferrer'><i className='bx bxl-instagram' ></i></a>
            <a href="#contact" ><i class='bx bx-envelope'></i></a>

          </div>

          <div className='resumeBtn'>
            <a href="https://drive.google.com/file/d/14FWIuOW7keoyDBm6veKKbxZv3kTlCFbZ/view?usp=sharing" target='_blank' rel='noreferrer' className="btn textGradient">View Resume</a>
          </div>
        </div>
        <div className="homeImage">
          <img src={newFace} alt="" />
        </div>
      </section>
    </div>
  )
}

export default HeroSection

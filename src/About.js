import React from 'react'

const About = () => {
  return (
    <div>

      <section className="about" id="about">
        <div className="aboutContent" >
          <div className='headingPosition'>
            <h1 className="flexrow heading  " >&lt;About /&gt;</h1>
            <h1 className="flexrow headingBottom  " >Hardik Singh</h1>

          </div>

          <div data-aos="fade-left">
            <p> Hello, I'm Hardik, a passionate Frontend Web Developer based in Lucknow,Uttar Pradesh. I specialize in crafting immersive web experiences that not only look great but also function flawlessly.I believe in the power of collaboration. I work closely with designers and clients to bring their visions to life. I'm not just a developer; I'm a problem solver who enjoys tackling challenges head-on and finding elegant solutions.
            </p>
          </div>
          <div data-aos="fade-right">
            <h4 className='highlightHeading'>My Journey</h4>
            <p> I've been on a quest to turn ideas into interactive, pixel-perfect realities. I've had the privilege of working on a diverse range of projects, from very basic css and javascript projets to advance Reactjs projects, and I've loved every moment of it.
            </p>
          </div>
          <div data-aos="fade-left">
            <h4 className='highlightHeading '>What I do ?</h4>
            <div className='whatIdo'>

              <div><h5 className='highlightHeading'>HTML/CSS : </h5> <span><p> Crafting clean and semantic code for a solid foundation.</p></span></div>
              <div><h5 className='highlightHeading'>JavaScript/Reactjs : </h5> <span><p> Bringing interactivity and dynamic functionality to web applications.</p></span></div>
              <div><h5 className='highlightHeading'>Responsive Design  :</h5> <span><p> Ensuring websites look and work perfectly on all devices.</p></span></div>
              <div><h5 className='highlightHeading'>Performance Optimization  : </h5> <span><p> Optimizing load times for a seamless user experience.</p></span></div>
              <div><h5 className='highlightHeading'>Cross-Browser Compatibility  :</h5> <span><p> Ensuring compatibility with all major browsers.</p></span></div>

            </div>
          </div>
          <div className="aboutsecButtons" data-aos="fade-right">
            <a href="#services" className="btn">My Services</a>
            <a href="#contact" className="btn">Let's Connect</a>
          </div>
        </div>

        <div className="aboutBoxContainer flexrow" data-aos="fade-left">

          <div className="aboutBox">
            <i className='bx bxs-graduation' ></i>
            <p>Btech (CSE)</p>
            <h4>Education</h4>
          </div>
          <div className="aboutBox">
            <i className='bx bx-code-alt' ></i>
            <p>10+ Projects</p>
            <h4>Completed</h4>
          </div>
          <div className="aboutBox">
            <i className='bx bx-headphone' ></i>
            <p>24 X 7</p>
            <h4>Available</h4>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

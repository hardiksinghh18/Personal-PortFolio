import React from 'react'

const About = () => {
  return (
    <div>

      <section className="about" id="about">
        <div className="aboutContent"  data-aos="fade-right">
          <h3 className="flexrow heading">About Me</h3>
          <h2 className="highlightHeading">Frontend Developer</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab dignissimos ullam amet perspiciatis temporibus quod eligendi aspernatur tenetur quia quasi nisi architecto aut voluptatem reiciendis, minus maiores quos dolorem sunt.</p>


          <a href="#" className="btn">My Services</a>
        </div>

        <div className="aboutBoxContainer flexrow"  data-aos="fade-left">
          
          <div className="aboutBox">
          <i className='bx bxs-graduation' ></i>
          <p>Btech (CSE)</p>
          <h4>Education</h4>
          </div>
          <div className="aboutBox">
          <i className='bx bx-code-alt' ></i>
          <p>15+ Projects</p>
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

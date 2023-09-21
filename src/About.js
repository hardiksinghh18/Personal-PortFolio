import React from 'react'

const About = () => {
  return (
    <div>

      <section class="about" id="about">
        <div class="aboutContent"  data-aos="fade-right">
          <h3 className="flexrow heading">About Me</h3>
          <h2 class="highlightHeading">Frontend Developer</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab dignissimos ullam amet perspiciatis temporibus quod eligendi aspernatur tenetur quia quasi nisi architecto aut voluptatem reiciendis, minus maiores quos dolorem sunt.</p>


          <a href="#" class="btn">My Services</a>
        </div>

        <div class="aboutBoxContainer flexrow"  data-aos="fade-left">
          
          <div class="aboutBox">
          <i class='bx bxs-graduation' ></i>
          <p>Btech (CSE)</p>
          <h4>Education</h4>
          </div>
          <div class="aboutBox">
          <i class='bx bx-code-alt' ></i>
          <p>15+ Projects</p>
          <h4>Completed</h4>
          </div>
          <div class="aboutBox">
          <i class='bx bx-headphone' ></i>
          <p>24 X 7</p>
          <h4>Available</h4>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

import React from 'react'
import homeImage from './images/homeImage.png'


const HeroSection = () => {
  return (
    <div>
      <section class="home" id="home">
        <div class="homeContent">
          <h3>Hello,It's me</h3>
          <h1>Hardik Singh</h1>
          <h3>And I'm a <span class="highlightHeading"> Frontend Developer</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iure? Unde consequatur iste voluptatem, explicabo accusantium itaque sit eum ullam fugiat amet a porro aliquid! Dolorum atque nostrum repellat optio.</p>


          <div class="socialMedia">
            <a href="#"><i class='bx bxl-github' ></i></a>
            <a href="#"><i class='bx bxl-linkedin' ></i></a>
            <a href="#"><i class='bx bxl-instagram' ></i></a>
            <a href="#"><i class='bx bxl-twitter' ></i></a>

          </div>

          <a href="#" class="btn">Download Resume</a>
        </div>

        <div class="homeImage">
          <img src="images/homeImage.png" alt="" />
          <img src={homeImage} alt="" />
        </div>
      </section>
    </div>
  )
}

export default HeroSection
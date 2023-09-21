import React from 'react'
import ServiceModal from './components/ServiceModal'

const Service = () => {

    // const openModal1 = () => {
    //     let modal = document.getElementById('services__modal1')
    //     modal.classList.add('active-modal')


    // }

    // const closeModal1 = () => {
    //     let modal = document.getElementById('services__modal1')
    //     modal.classList.remove('active-modal')
    //     let serviceContainer = document.getElementById('serviceContainer')
    //     serviceContainer.style.opacity = '1'
    // }
    // const openModal2 = () => {
    //     let modal = document.getElementById('services__modal2')
    //     modal.classList.add('active-modal')
    //     let serviceContainer = document.getElementById('serviceContainer')

    // }

    // const closeModal2 = () => {
    //     let modal = document.getElementById('services__modal2')
    //     modal.classList.remove('active-modal')
    //     let serviceContainer = document.getElementById('serviceContainer')
    //     serviceContainer.style.opacity = '1'
    // }
    // const openModal3 = () => {
    //     let modal = document.getElementById('services__modal3')
    //     modal.classList.add('active-modal')
    //     let serviceContainer = document.getElementById('serviceContainer')

    // }

    // const closeModal3 = () => {
    //     let modal = document.getElementById('services__modal3')
    //     modal.classList.remove('active-modal')
    //     let serviceContainer = document.getElementById('serviceContainer')
    //     serviceContainer.style.opacity = '1'
    // }
    return (
        <div>

            <section class="services flexcolumn" id="services">
                <h2 class="serviceHeading">
                    Services
                </h2>

                <div class="serviceContainer flexrow"  >
                    <div class="serviceBox flexcolumn"  data-aos="fade-right">
                        <i class='bx bx-code-alt' ></i>
                        <h4 class="highlightHeading">Frontend Developer</h4>
                        <p>As a frontend React.js developer, I craft interactive and user-friendly web interfaces. I create and optimize React components, manage state, and ensure responsive design. My goal is to deliver engaging, high-performance web applications. </p>

                        <ServiceModal value={"frontend"}/>
                    </div>
                    <div class="serviceBox flexcolumn"   data-aos="fade-in">
                    <i class='bx bx-screenshot'></i>
                      <h4 class="highlightHeading">Ui/Ux Designer</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto culpa pariatur laboriosam debitis cupiditate odio neque, aut ipsum, commodi, ullam ex rem recusandae ratione asperiores suscipit earum voluptatum veritatis illo?
                        </p>

                        <ServiceModal value={"ui"} />
                    </div>
                    <div class="serviceBox flexcolumn"   data-aos="fade-left">
                    <i class='bx bxl-mongodb'></i>
                         <h4 class="highlightHeading">Backend Developer</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto culpa pariatur laboriosam debitis cupiditate odio neque, aut ipsum, commodi, ullam ex rem recusandae ratione asperiores suscipit earum voluptatum veritatis illo?
                        </p>

                        <ServiceModal value={"backend"}/>
                    </div>
                </div>



           
         
            </section>
        </div>
    )
}

export default Service

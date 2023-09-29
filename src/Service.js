import React from 'react'
import ServiceModal from './components/ServiceModal'

const Service = () => {


    return (
        <div>

            <section className="services flexcolumn" id="services">
                <h3 className="serviceHeading highlightHeading" data-aos="fade-right">
                    Services
                </h3>

                <div className="serviceContainer flexrow"  >
                    <div className="serviceBox flexcolumn"  data-aos="fade-right">
                        <i className='bx bx-code-alt' ></i>
                        <h4 className="highlightHeading">Frontend Developer</h4>
                        <p>As a frontend React.js developer, I craft interactive and user-friendly web interfaces. I create and optimize React components, manage state, and ensure responsive design. My goal is to deliver engaging, high-performance web applications. </p>

                        <ServiceModal value={"frontend"}/>
                    </div>
                    <div className="serviceBox flexcolumn"   data-aos="fade-in">
                    <i className='bx bx-screenshot'></i>
                      <h4 className="highlightHeading">Ui/Ux Designer</h4>
                        <p>As an UI/UX designer I focus on crafting intuitive, aesthetically pleasing digital interfaces. I conduct user research, wireframe designs, create prototypes, and oversee the overall user experience, ensuring usability and user satisfaction for websites, apps, or software products.</p>

                        <ServiceModal value={"ui"} />
                    </div>
                    <div className="serviceBox flexcolumn"   data-aos="fade-left">
                    <i className='bx bxl-mongodb'></i>
                         <h4 className="highlightHeading">Backend Developer</h4>
                        <p>I'm a fundamental backend developer leveraging MongoDB. My role centers on database management, data manipulation, and server-side logic. I enable web applications to store and retrieve data, supporting their functionality and ensuring efficient data operations.</p>

                        <ServiceModal value={"backend"}/>
                    </div>
                </div>



           
         
            </section>
        </div>
    )
}

export default Service

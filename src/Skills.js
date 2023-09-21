import React from 'react'

const Skills = () => {
    return (
        <section id='skill' className='skill'>
            <h3 className='flexrow  heading highlightHeading'>Skills</h3>

            <div className="skillContainer flexrow">
                <div className="skills"  data-aos="fade-right">
                    <h4 className='highlightHeading flexrow'>Frontend Developer</h4>
                    <div className="frontendSkills ">
                        <div className='skillBoxes'>
                            <div className='skillBox'>
                                <div  className="flexrow"><i class='bx bx-badge-check' ></i></div>
                                <div className='skillDetail'>
                                    <h5>HTML</h5>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                            <div className='skillBox'>
                                <div className="flexrow"><i class='bx bx-badge-check' ></i></div>
                                <div className='skillDetail'>
                                    <h5>CSS</h5>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                            <div className='skillBox'>
                                <div className="flexrow"><i class='bx bx-badge-check' ></i></div>
                                <div className='skillDetail'>
                                    <h5>Javascript</h5>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                        </div>
                        <div className='skillBoxes'>
                            <div className='skillBox'>
                                <div className="flexrow"><i class='bx bx-badge-check' ></i></div>
                                <div className='skillDetail'>
                                    <h5>Bootstrap</h5>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                            <div className='skillBox'>
                                <div className="flexrow"><i class='bx bx-badge-check' ></i></div>
                                <div className='skillDetail'>
                                    <h5>Reactjs</h5>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                            <div className='skillBox'>
                                <div className="flexrow"><i class='bx bx-badge-check' ></i></div>
                                <div className='skillDetail'>
                                    <h5>Git</h5>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
                <div className="skills"  data-aos="fade-left">

                    <h4 className='highlightHeading flexrow'>Backend Developer</h4>

                    <div className="frontendSkills ">
                        <div className='skillBoxes'>
                            <div className='skillBox'>
                                <div  className="flexrow"><i class='bx bx-badge-check' ></i></div>
                                <div className='skillDetail'>
                                    <h5>MongoDB</h5>
                                    <p>Basic</p>
                                </div>
                            </div>
                            
                            <div className='skillBox'>
                                <div className="flexrow"><i class='bx bx-badge-check' ></i></div>
                                <div className='skillDetail'>
                                    <h5>Express.js</h5>
                                    <p>Basic</p>
                                </div>
                            </div>
                            <div className='skillBox'>
                                <div className="flexrow"><i class='bx bx-badge-check' ></i></div>
                                <div className='skillDetail'>
                                    <h5>Express.js</h5>
                                    <p>Basic</p>
                                </div>
                            </div>
                           
                        </div>
                        <div className='skillBoxes'>
                            <div className='skillBox'>
                                <div className="flexrow"><i class='bx bx-badge-check' ></i></div>
                                <div className='skillDetail'>
                                    <h5>FireBase</h5>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                          
                            <div className='skillBox'>
                                <div className="flexrow"><i class='bx bx-badge-check' ></i></div>
                                <div className='skillDetail'>
                                    <h5>Git</h5>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </section>
    )
}

export default Skills

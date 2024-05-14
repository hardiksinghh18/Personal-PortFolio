
import React, { useState } from 'react';

// import js from './images/icons/js.png'
// import ts from './images/icons/ts.png'
// import html from './images/icons/html.png'
// import css from './images/icons/css.png'
// import aws from './images/icons/aws.png'
// import express from './images/icons/express.png'
// import firebase from './images/icons/firebase.png'
// import git from './images/icons/git.png'
// import github from './images/icons/github.png'
// import mongo from './images/icons/mongo.png'
// import nextjs from './images/icons/nextjs.png'
// import nodejs from './images/icons/nodejs.png'
// import react from './images/icons/react.png'
// import redux from './images/icons/redux.png'
// import sass from './images/icons/sass.png'
// import sql from './images/icons/sql.png'
// import tailwind from './images/icons/tailwind.png'
import SkillsNew from './SkillsNew';

const AboutNew = () => {
    const [selectedItem, setSelectedItem] = useState('About');



    const contentMap = {
        'Education': `
        <div className='education'>
        <h5>Dr. APJ Abdul Kalam Technical University</h5>
<p>&#8594;	Bachelor of Technology</p>
<p>&#8594;	Computer Science Engineering | 2021 - 2025</p>
<p>&#8594;	Completed relevant coursework in data structures and algorithms, software engineering, operating systems, and database systems</p>
     


    </div>
      `,
        'What I do?': `
         <div>
         <h5>1. Want cool website?</h5>
         <p>Okay, I can help you by designing, building, and hosting a beautiful site that'll grow your business.</p>
        
         <h5>2. Want to convert your idea into reality?</h5>
         <p>Got a next million dollor idea, Well, I'm here to help you in converting that idea to reality by my developement skills. I provide a powerful Web Application that fits your exact needs and can scale to millions.</p>
         
         <h5>3. Want to sell online?</h5>
         <p>Cool, that is why I'm here to help you set up an e-commerce store that looks amazing, fast and makes you money.</p>
        
         </div>
        `,
        'About': `
           <div>

           <div>
              <h5>&#8594; About me</h5>
              <p>I'm a passionate and innovative Front-End Web Developer with a keen focus on building dynamic user interfaces using React.js. My proficiency in HTML, CSS, and JavaScript complements my expertise in React, allowing me to create seamless, interactive, and intuitive user experiences that captivate audiences.</p>
              </div>
              <div>
              <h5> &#8594; Full-Stack Dev</h5>
              <p>As a full-stack developer, I craft fully functional and user-friendly web interfaces. I create and optimize React components, manage state, and handle both front-end and back-end tasks, including building user interfaces and server-side applications, while also managing databases, deployment, testing, and collaborating with team members for comprehensive web development.</p>
              </div>
              <div>
              <h5>&#8594; Freelancer</h5>
              <p>I'm available for freelance projects. Let's work together to create something worth sharing. </p>
              </div>
              <div>
              <h5>&#8594; Ui/Ux</h5>
              <p>As an UI/UX designer I focus on crafting intuitive, aesthetically pleasing digital interfaces. </p>
              </div>
              </div>
        `
        ,
        'Resume': '<h3>Resume</h3><p>This is the content for Celebrare.</p>',
    };

    const changeContent = (item) => {
        setSelectedItem(item);
    };

    return (

        <section id='aboutNew'>



            <div className='headingPosition'>
                <h1 className="flexrow heading  " >&lt;About /&gt;</h1>
                <h1 className="flexrow headingBottom  " >Hardik Singh</h1>

            </div>



            <div className='flexrow aboutContentNew'>
                <p>Welcome to my portfolio! <br />
                    In Short: I'm a passionate and experienced developer with a deep love for all tech things.</p>

            </div>
            <div className='mainDivAbt'>


                <div className='flexrow aboutNew'>
                    <div className='aboutSelect'>
                        <div className={`${selectedItem === 'About' ? 'activeItem' : ''}`} onClick={() => changeContent('About')}><p >About Me</p></div>
                        <div className={`${selectedItem === 'Education' ? 'activeItem' : ''}`} onClick={() => changeContent('Education')}><p >Education</p></div>

                        <div className={`${selectedItem === 'What I do?' ? 'activeItem' : ''}`} onClick={() => changeContent('What I do?')}><p >Why Me?</p></div>
                        {/* <div className={`${selectedItem === 'Resume' ? 'activeItem' : ''}`} onClick={() => changeContent('Resume')}><p >Resume</p></div> */}
                        {/* <div  className={`${selectedItem === 'Resume' ? 'activeItem' : ''}`} ><p >Skills</p></div> */}

                    </div>

                    <div className='aboutDetail'>
                        {/* <div className='abtTitle' dangerouslySetInnerHTML={{ __html: selectedItem }} /> */}


                        <div className='abtDesc' dangerouslySetInnerHTML={{ __html: contentMap[selectedItem] }} />
                        {/* <SkillsNew/> */}



                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutNew

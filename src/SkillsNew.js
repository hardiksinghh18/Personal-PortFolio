import React from 'react'
import js from './images/icons/js.png'
import ts from './images/icons/ts.png'
import cpp from './images/icons/cpp.png'
import html from './images/icons/html.png'
import css from './images/icons/css.png'
import express from './images/icons/express.png'
import firebase from './images/icons/firebase.png'
import git from './images/icons/git.png'
import github from './images/icons/github.png'
import mongo from './images/icons/mongo.png'
import nextjs from './images/icons/nextjs.png'
import nodejs from './images/icons/nodejs.png'
import react from './images/icons/react.png'
import redux from './images/icons/redux.png'
import sass from './images/icons/sass.png'
import sql from './images/icons/sql.png'
import postgreSQL from './images/icons/postgreSQL.png'
import supabase from './images/icons/supabase.webp'
import tailwind from './images/icons/tailwind.png'
import figma from './images/icons/figma.svg'
import vercel from './images/icons/vercel.png'
import docker from './images/icons/docker.png'
import postman from './images/icons/postman.png'

const SkillsNew = () => {
    return (
        <section className='skillMain' id='skillsNew'>

            <h2 className='section-heading-minimal'>Tech Stack.</h2>

            <div className='aboutSkills'>
                <div className='skillLogos'>
                    <div>
                        <img src={ts} alt="TypeScript" />
                        <p>TypeScript</p>
                    </div>
                    <div>
                        <img src={js} alt="JavaScript" />
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <img src={cpp} alt="C/C++" />
                        <p>C/C++</p>
                    </div>
                    <div>
                        <img src={sql} alt="SQL" />
                        <p>SQL</p>
                    </div>
                    <div>
                        <img src={html} alt="HTML" />
                        <p>HTML</p>
                    </div>
                    <div>
                        <img src={css} alt="CSS" />
                        <p>CSS</p>
                    </div>
                    <div>
                        <img src={sass} alt="SCSS" />
                        <p>SCSS</p>
                    </div>
                    <div>
                        <img src={react} alt="React.js" />
                        <p>React.js</p>
                    </div>
                    <div>
                        <img src={redux} alt="Redux" className="light-theme-invert" />
                        <p>Redux</p>
                    </div>
                    <div>
                        <img src={nextjs} alt="Next.js" className="light-theme-invert" />
                        <p>Next.js</p>
                    </div>
                    <div>
                        <img src={tailwind} alt="Tailwind CSS" />
                        <p>Tailwind CSS</p>
                    </div>
                    <div>
                        <img src={nodejs} alt="Node.js" />
                        <p>Node.js</p>
                    </div>
                    <div>
                        <img src={express} alt="Express.js" className="light-theme-invert" />
                        <p>Express.js</p>
                    </div>
                    <div>
                        <img src={postgreSQL} alt="PostgreSQL" />
                        <p>PostgreSQL</p>
                    </div>
                    <div>
                        <img src={mongo} alt="MongoDB" />
                        <p>MongoDB</p>
                    </div>
                    <div>
                        <img src={firebase} alt="Firebase" />
                        <p>Firebase</p>
                    </div>
                    <div>
                        <img src={supabase} alt="Supabase" />
                        <p>Supabase</p>
                    </div>
                    <div>
                        <img src={git} alt="Git" />
                        <p>Git</p>
                    </div>
                    <div>
                        <img src={github} alt="GitHub" className="light-theme-invert" />
                        <p>GitHub</p>
                    </div>
                    <div>
                        <img src={docker} alt="Docker" />
                        <p>Docker</p>
                    </div>
                    <div>
                        <img src={postman} alt="Postman" />
                        <p>Postman</p>
                    </div>
                    <div>
                        <img src={vercel} alt="Vercel" className="light-theme-invert" />
                        <p>Vercel</p>
                    </div>
                    <div>
                        <img src={figma} alt="Figma" />
                        <p>Figma</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SkillsNew

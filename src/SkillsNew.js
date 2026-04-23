import React from 'react'
import js from './images/icons/js.png'
import ts from './images/icons/ts.png'
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
import tailwind from './images/icons/tailwind.png'
import figma from './images/icons/figma.svg'
import vercel from './images/icons/vercel.png'
import docker from './images/icons/docker.png'
import postman from './images/icons/postman.png'

const SkillsNew = () => {
    return (
        <section className='skillMain' id='skillsNew'>

            <div className='headingPosition'>
                <h1 className='flexrow heading ' >&lt; Tech /&gt;</h1>
                <h1 className='flexrow headingBottom  ' >Stack</h1>

            </div>

            <div className='aboutSkills'>
                <div>
                    <h3 className='textGradient'>Frontend</h3>
                    <div className='skillLogos'>
                        <div>
                            <img src={js} alt="" />
                            <p>JS</p>
                        </div>
                        <div>
                            <img src={ts} alt="" />
                            <p>TS</p>
                        </div>
                        <div>
                            <img src={react} alt="" />
                            <p>React</p>
                        </div>
                        <div>
                            <img src={redux} alt="" className="light-theme-invert" />
                            <p>Redux</p>
                        </div>
                        <div>
                            <img src={tailwind} alt="" />
                            <p>Tailwind</p>
                        </div>
                        <div>
                            <img src={sass} alt="" />
                            <p>SCSS</p>
                        </div>
                        <div>
                            <img src={nextjs} alt="" className="light-theme-invert" />
                            <p>NextJs</p>
                        </div>
                        <div>
                            <img src={html} alt="" />
                            <p>HTML</p>
                        </div>
                        <div>
                            <img src={css} alt="" />
                            <p>CSS</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='textGradient'>Backend</h3>
                    <div className='skillLogos'>
                        <div>
                            <img src={nodejs} alt="" />
                            <p>NodeJs</p>
                        </div>
                        <div>
                            <img src={express} alt="" className="light-theme-invert" />
                            <p>ExpressJs</p>
                        </div>
                        <div>
                            <img src={firebase} alt="" />
                            <p>Firebase</p>
                        </div>
                        <div>
                            <img src={mongo} alt="" />
                            <p>MongoDB</p>
                        </div>
                        <div>
                            <img src={sql} alt="" />
                            <p>SQL</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='textGradient'>Others</h3>
                    <div className='skillLogos'>
                        <div>
                            <img src={git} alt="" />
                            <p>Git</p>
                        </div>
                        <div>
                            <img src={github} alt="" className="light-theme-invert" />
                            <p>Github</p>
                        </div>
                        <div>
                            <img src={figma} alt="" />
                            <p>Figma</p>
                        </div>
                        <div>
                            <img src={vercel} alt="" className="light-theme-invert" />
                            <p>Vercel</p>
                        </div>
                        <div>
                            <img src={docker} alt="" />
                            <p>Docker</p>
                        </div>
                        <div>
                            <img src={postman} alt="" />
                            <p>Postman</p>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default SkillsNew

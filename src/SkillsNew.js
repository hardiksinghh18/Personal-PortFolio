import React from 'react'
import js from './images/icons/js.png'
import ts from './images/icons/ts.png'
import html from './images/icons/html.png'
import css from './images/icons/css.png'
import aws from './images/icons/aws.png'
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
const SkillsNew = () => {
    return (
        <section className='skillMain' id='skillsNew'>

            <div className='headingPosition'>
                <h1 className='flexrow heading ' >&lt;Skills /&gt;</h1>
                <h1 className='flexrow headingBottom  ' >I Acquire</h1>

            </div>

            <div className='aboutSkills'>
                <div>
                    <h3 className='mySkills'>Frontend</h3>
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
                            <img src={redux} alt="" />
                            <p>Redux</p>
                        </div>
                        <div>
                            <img src={tailwind} alt="" />
                            <p>Tailwind</p>
                        </div>
                        <div>
                            <img src={sass} alt="" />
                            <p>Saas</p>
                        </div>
                        <div>
                            <img src={nextjs} alt="" />
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
                            <img src={express} alt="" />
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
                            <img src={github} alt="" />
                            <p>Github</p>
                        </div>
                        <div>
                            <img src='https://www.mukulrajpoot.com/icons/figma.svg' alt="" />
                            <p>Figma</p>
                        </div>
                        <div>
                            <img src='https://www.mukulrajpoot.com/icons/vscode.svg' alt="" />
                            <p>VSCode</p>
                        </div>
                        <div>
                            <img src='https://www.mukulrajpoot.com/icons/vercel.svg' alt="" />
                            <p>Vercel</p>
                        </div>
                        <div>
                            <img src='https://www.mukulrajpoot.com/icons/docker.svg' alt="" />
                            <p>Docker</p>
                        </div>


                    </div>
                </div>
            </div>


        </section>
    )
}

export default SkillsNew

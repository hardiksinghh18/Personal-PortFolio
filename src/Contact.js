import React from 'react';
import profile from './images/profile.jpg'

const Contact = () => {
    return (
        <section className='contact-section-new' id='contact'>
            {/* <h2 className='section-heading-minimal'>Say Hello.</h2> */}

            <div className="connect-container">
                <p className="connect-text">If you've read this far, click on the profile icon to connect.</p>
                
                <div className="connect-visual">
                    <div className="connect-avatar-circle">
                        <img src={profile} alt="Hardik" />
                    </div>
                    
                    {/* Squiggle SVG Bridge */}
                    <div className="connect-bridge-svg-wrapper">
                        <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="connect-bridge-svg">
                            <path 
                                d="M 0 30 C 20 45 40 45 60 20 C 80 -10 100 -10 120 30 C 140 50 170 30 200 25" 
                                className="bridge-base-path"
                                fill="none" 
                                stroke="var(--border-subtle)" 
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />
                            <path 
                                d="M 0 30 C 20 45 40 45 60 20 C 80 -10 100 -10 120 30 C 140 50 170 30 200 25" 
                                className="bridge-pulse-path"
                                fill="none" 
                                stroke="url(#themeGradient)" 
                                strokeWidth="3.5"
                                strokeLinecap="round"
                            />
                            <defs>
                                <linearGradient id="themeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="transparent" />
                                    <stop offset="50%" stopColor="var(--text-color)" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    
                    <a href="mailto:hardiksingh950@gmail.com" className="connect-person-link" title="Email Me">
                        <div className="connect-person-circle">
                            <i className='bx bx-user'></i>
                        </div>
                    </a>
                </div>

                <h2 className="connect-footer-text">Let's Connect</h2>
            </div>
        </section>
    )
}

export default Contact;

import React from 'react';
import newFace from './images/newFace.png';

const Contact = () => {
    return (
        <section className='contact flexcolumn' id='contact'>
            <div className='headingPosition'>
                <h1 className='flexrow heading'>&lt; Contact /&gt;</h1>
                <h1 className='flexrow headingBottom'>Say Hello 👋</h1>
            </div>

            <div className="connect-container">
                <p className="connect-text">If you've read this far, you might be interested in what I do.</p>
                
                <div className="connect-visual">
                    <div className="connect-avatar-circle">
                        <img src={newFace} alt="Hardik" />
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
                                stroke="url(#pinkGradient)" 
                                strokeWidth="3.5"
                                strokeLinecap="round"
                            />
                            <defs>
                                <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="transparent" />
                                    <stop offset="50%" stopColor="#ff007a" />
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

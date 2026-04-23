import React, { useState, useEffect } from 'react';
import newFace from './images/newFace.png'

const HeroSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [greetingIndex, setGreetingIndex] = useState(0);
    const [hasLoaded, setHasLoaded] = useState(false);

    const greetings = [
        "नमस्ते", // Hindi
        "नमस्कार", // Marathi
        "નમસ્તે", // Gujarati
        "வணக்கம்", // Tamil
        "నమస్కారం", // Telugu
        "ਪ੍ਰਣਾਮ", // Punjabi
        "প্রনাম", // Bengali
        "राम राम", // Bhojpuri
        "Hello", // English
        "Bonjour", // French
        "Konnichiwa", // Japanese
        "Hola", // Spanish
        "Ciao", // Italian
        "Olà" // Portuguese
    ];

    useEffect(() => {
        // Show Namaste on page load
        setGreetingIndex(0);
        setIsHovered(true);
        const timer = setTimeout(() => {
            setIsHovered(false);
            setHasLoaded(true);
        }, 2500); 
        return () => clearTimeout(timer);
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (hasLoaded) {
            setGreetingIndex(Math.floor(Math.random() * greetings.length));
        }
    };

    return (
        <section className="hero-minimal" id="home">
            <div className="hero-main-container">
                <div className="hero-top-row">
                    <div 
                        className="hero-avatar-area"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {isHovered && (
                            <div className="greeting-container">
                                <div className="greeting-dot"></div>
                                <div className="greeting-bubble">
                                    {greetings[greetingIndex]}
                                </div>
                            </div>
                        )}
                        <img src={newFace} alt="Hardik Singh" className="hero-avatar-main" />
                    </div>

                    <div className="hero-identity-area">
                        <h1 className="hero-headline">
                            <span className="text-white">नमस्ते, I'm Hardik Singh — </span>
                            <span className="text-grey">A Full stack </span>
                            <span className="text-white designer-pill">
                                web developer
                                <div className="designer-pill-box">
                                    <div className="designer-pill-box-handles"></div>
                                    <div className="designer-cursor">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M5.662 2.732l15.111 11.233-6.233 1.106 4.34 6.772-2.124 1.36-4.341-6.771-3.6 5.836z" />
                                        </svg>
                                    </div>
                                </div>
                            </span> <br/>
                            <span className="text-grey">and... sometimes... a </span>
                            <span className="freelancer-pill">
                                Freelancer
                            </span>

                        </h1>

                        {/* Desktop: Resume Button ONLY */}
                        <div className="hero-desktop-action hero-desktop-only">
                            <a href="https://drive.google.com/file/d/14FWIuOW7keoyDBm6veKKbxZv3kTlCFbZ/view?usp=sharing" 
                               target='_blank' 
                               rel='noreferrer' 
                               className="hero-resume-btn">
                                Resume <i className='bx bx-right-arrow-alt'></i>
                            </a>
                        </div>

                        {/* Mobile: Social Links ONLY */}
                        <div className="hero-mobile-socials hero-mobile-only">
                            <a href="https://github.com/hardiksinghh18" target='_blank' rel='noreferrer'><i className='bx bxl-github'></i></a>
                            <a href="https://twitter.com/hardiksingh18_" target='_blank' rel='noreferrer'><i className='bx bxl-twitter' ></i></a>
                            <a href="https://www.linkedin.com/in/hardik-singh-391946278/" target='_blank' rel='noreferrer'><i className='bx bxl-linkedin'></i></a>
                            <a href="https://drive.google.com/file/d/14FWIuOW7keoyDBm6veKKbxZv3kTlCFbZ/view?usp=sharing" target='_blank' rel='noreferrer'><i className='bx bx-file'></i></a>
                            <a href="mailto:hardiksingh950@gmail.com" target='_blank' rel='noreferrer'><i className='bx bxl-gmail'></i></a>
                        </div>
                    </div>
                </div>

                <div className="hero-separator"></div>

                <div className="hero-bottom-row">
                    <div className="hero-bio-block">
                        <p className="bio-text">
                            ~ Full Stack Developer specializing in <span className="tech-link">TypeScript <i className='bx bxl-typescript' style={{ color: '#007acc' }}></i></span>, <span className="tech-link">Next.js <i className='bx bxl-react' style={{ color: '#61dafb' }}></i></span>, <span className="tech-link">Node.js <i className='bx bxl-nodejs' style={{ color: '#68a063' }}></i></span> and <span className="tech-link">Docker <i className='bx bxl-docker' style={{ color: '#2496ed' }}></i></span>.
                        </p>
                        <p className="bio-text">
                            ~ 2 years of experience in <span className="tech-link">optimizing performance <i className='bx bx-bolt' style={{ color: '#facc15' }}></i></span> and delivering impactful, <span className="tech-link">real-world solutions <i className='bx bx-world' style={{ color: 'var(--text-color)' }}></i></span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

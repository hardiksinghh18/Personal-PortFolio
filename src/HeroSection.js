import React, { useState, useEffect } from 'react';
import { Tooltip } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import blackhole from './images/blackhole.webp'
import profile from './images/profile.webp'

const HeroSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [greetingIndex, setGreetingIndex] = useState(0);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("hardiksingh.codes@gmail.com");
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const options = {
                timeZone: 'Asia/Kolkata',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            };
            const timeString = new Date().toLocaleTimeString('en-US', options);
            setCurrentTime(timeString);
        };
        updateTime();
        const interval = setInterval(updateTime, 30000);
        return () => clearInterval(interval);
    }, []);

    const greetings = [
        // "नमस्ते", // Hindi
        // "नमस्कार", // Marathi
        // "નમસ્તે", // Gujarati
        // "வணக்கம்", // Tamil
        // "నమస్కారం", // Telugu
        // "ਪ੍ਰਣਾਮ", // Punjabi
        // "প্রনাম", // Bengali
        // "राम राम", // Bhojpuri
        // "Hello", // English
        // "Bonjour", // French
        // "Konnichiwa", // Japanese
        // "Hola", // Spanish
        // "Ciao", // Italian
        // "Olà", // Portuguese
        "Valar Morghulis", // GOT - All men must die
        "Valar Dohaeris", // GOT - All men must serve
        "Dracarys", // GOT - Dragonfire
        "Hodor", // GOT - Hodor
        "Winter is Coming", // GOT - House Stark
        "A Lannister Always Pays His Debts", // GOT
        "The North Remembers", // GOT
        "Fire and Blood", // GOT - House Targaryen
        "What is Dead May Never Die", // GOT - Ironborn
        "Ours is the Fury", // GOT - House Baratheon
        "Power resides where men believe it resides",
        "Burn the Ships"
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

    const titles = [
        "Software Engineer",
        "Freelancer",
        "Human"
    ];
    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        const titleInterval = setInterval(() => {
            setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 3000);
        return () => clearInterval(titleInterval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <div className="hero-banner">
                    <img src={blackhole} alt="Banner" className="hero-banner-img" />
                </div>
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
                                    ⚔️ {greetings[greetingIndex]}
                                </div>
                            </div>
                        )}
                        <img src={profile} alt="Hardik Singh" className="hero-avatar-main" />
                    </div>

                    <div className="hero-identity-area">
                        <h2 className="hero-name">
                            Hardik Singh
                            <svg className="verified-tick" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34z" fill="#1D9BF0" />
                                <path d="M10.54 16.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" fill="#ffffff" />
                            </svg>
                        </h2>
                        <div className="hero-title-row">
                            <p className="hero-title animate-flip" key={titleIndex}>
                                {titles[titleIndex]}
                            </p>
                            {currentTime && (
                                <div className="hero-location-time">
                                    <PlaceOutlinedIcon className="loc-icon-svg" />
                                    <span>India</span>
                                    <span className="location-dot">•</span>
                                    <span>{currentTime}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="hero-links-container">
                        <div className="hero-banner-links">
                            <Tooltip title="Resume" arrow placement="bottom">
                                <a href="https://drive.google.com/file/d/13VNxEr2QN2Yiy6C-XQgP2CsGYGGQzxmp/view" target='_blank' rel='noreferrer'>
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                    </svg>
                                </a>
                            </Tooltip>
                            <Tooltip title="LinkedIn" arrow placement="bottom">
                                <a href="https://www.linkedin.com/in/hardiksingh18" target='_blank' rel='noreferrer'>
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                    </svg>
                                </a>
                            </Tooltip>
                            <Tooltip title="GitHub" arrow placement="bottom">
                                <a href="https://github.com/hardiksinghh18" target='_blank' rel='noreferrer'>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                    </svg>
                                </a>
                            </Tooltip>
                            <Tooltip title="LeetCode" arrow placement="bottom">
                                <a href="https://leetcode.com/u/hardiksingh18_/" target='_blank' rel='noreferrer'>
                                    <svg width="15" height="15" viewBox="0 0 24 24" id="leetcode">
                                        <path fill="#777777ff" d="M20.303,16.047h-9.561c-0.936,0-1.697-0.803-1.697-1.79s0.762-1.79,1.697-1.79h9.561c0.936,0,1.697,0.803,1.697,1.79S21.238,16.047,20.303,16.047z"></path>
                                        <path fill="currentColor" d="M11.618,24c-1.604,0-2.977-0.533-3.97-1.541l-4.098-4.181C2.551,17.262,2,15.819,2,14.215c0-1.578,0.551-3.008,1.552-4.025l9.519-9.681c0.66-0.67,1.828-0.653,2.506,0.036c0.694,0.706,0.71,1.839,0.034,2.524l-1.762,1.816c0.655,0.268,1.241,0.659,1.739,1.159l2.463,2.53c0.672,0.684,0.655,1.815-0.039,2.521c-0.346,0.352-0.802,0.545-1.284,0.545l0,0c-0.464,0-0.896-0.181-1.219-0.509l-2.536-2.492c-0.321-0.327-0.779-0.49-1.367-0.49c-0.606,0-1.069,0.157-1.375,0.469l-4.067,4.194c-0.342,0.349-0.521,0.831-0.521,1.4c0,0.577,0.189,1.101,0.519,1.436l4.083,4.182c0.315,0.321,0.774,0.484,1.362,0.484s1.045-0.163,1.36-0.484l2.549-2.505c0.314-0.321,0.746-0.502,1.209-0.503c0.001,0,0.002,0,0.002,0c0.483,0,0.939,0.194,1.286,0.546c0.693,0.705,0.71,1.837,0.036,2.522l-2.457,2.525C14.586,23.438,13.176,24,11.618,24z M14.29,1c-0.193,0-0.374,0.074-0.507,0.21l-9.519,9.681C3.449,11.72,3,12.9,3,14.215c0,1.341,0.449,2.535,1.265,3.363c0,0,0,0,0.001,0.001l4.097,4.18C9.162,22.57,10.288,23,11.618,23c1.288,0,2.444-0.455,3.258-1.282l2.457-2.525c0.295-0.301,0.279-0.804-0.034-1.122c-0.156-0.159-0.36-0.247-0.573-0.247c0,0,0,0-0.001,0c-0.192,0.001-0.37,0.075-0.502,0.209l-2.549,2.505c-0.497,0.507-1.214,0.778-2.068,0.778s-1.572-0.271-2.076-0.784L5.446,16.35c-0.519-0.527-0.805-1.286-0.805-2.136c0-0.824,0.286-1.57,0.806-2.099l4.067-4.194c0.503-0.512,1.206-0.771,2.091-0.771c0.854,0,1.571,0.271,2.074,0.783l2.536,2.492c0.139,0.142,0.318,0.216,0.512,0.216l0,0c0.212,0,0.415-0.087,0.571-0.246c0.313-0.319,0.33-0.822,0.037-1.121l-2.461-2.528c-0.56-0.563-1.263-0.957-2.028-1.137c-0.175-0.041-0.331-0.176-0.382-0.349s-0.021-0.363,0.104-0.492l2.325-2.398c0.298-0.302,0.282-0.805-0.031-1.124C14.707,1.088,14.504,1,14.29,1z"></path>
                                    </svg>
                                </a>
                            </Tooltip>
                            <Tooltip title="Twitter / X" arrow placement="bottom">
                                <a href="https://twitter.com/hardiksingh18_" target='_blank' rel='noreferrer'>
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                            </Tooltip>
                        </div>
                    </div>
                </div>

                <div className="hero-separator"></div>

                <div className="hero-bottom-row">
                    <div className="hero-bio-block">
                        <p className="bio-text">
                            I think in <strong>systems, not just syntax</strong>. I build high-performance web applications using <span className="tech-highlight">React.js</span>, <span className="tech-highlight">Next.js</span>, <span className="tech-highlight">Node.js</span>, and <span className="tech-highlight">TypeScript</span>—choosing tools that let me <strong>ship fast</strong> and <strong>scale harder</strong>.
                        </p>
                        <p className="bio-text">
                            With <strong>2+ years of experience</strong>, I specialize in shipping <strong>AI integrations</strong>, building with <strong>Agentic AI</strong>, engineering <strong>scalable backend services</strong>, and turning ambitious ideas into <strong>high-impact, production-ready products</strong>.
                        </p>
                        <p className="bio-reachout">
                            Reach out to <strong>build what matters</strong> —{" "}
                            <Tooltip title={copied ? "Copied!" : "Click to copy email"} arrow placement="top">
                                <button className="email-pill" onClick={handleCopyEmail}>
                                    <MailOutlineIcon className="email-icon" />
                                    <span>hardiksingh.codes</span>
                                    {copied ? (
                                        <CheckIcon className="copy-icon-pill success" style={{ color: '#22c55e' }} />
                                    ) : (
                                        <ContentCopyIcon className="copy-icon-pill" />
                                    )}
                                </button>
                            </Tooltip>
                        </p>
                        <p className="bio-reachout" style={{ marginTop: '1.5rem' }}>
                            Lately, I've been building  —{" "}
                            <a
                                href="https://synckro.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                                className="cta-pill-primary"
                            >
                                <span>SyncKro</span>
                                <OpenInNewIcon className="cta-icon" />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

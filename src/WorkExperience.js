import React, { useState } from 'react';
import viLogo from './images/viLogo.png';
import collablyLogo from './images/collablyLogo.png';

const experiences = [
    {
        role: "Full Stack Developer Intern",
        company: "Virtual Internships",
        date: "Feb 2025 - Present",
        location: "Remote",
        logo: viLogo,
        description: [
            "Developed AI-powered resume parsing and profile completion features, increasing onboarding rates from 35% to 85% and reducing profile building time by 70%.",
            "Migrated 400 APIs from createAsyncThunk to Redux Toolkit Query (RTK Query), improving caching, data fetching performance, and frontend state management.",
            "Built and optimized RESTful APIs, implementing validation and structured error handling.",
            "Designed and scheduled Cron jobs in Node.js for automated email notifications and alerts to interns and company users.",
            "Engineered AI-assisted job description generation and developed a new batch creation workflow to streamline internal operations.",
            "Designed and developed an internal reusable React.js library vi-filter with include/exclude filters, infinite scroll, and list virtualization for large datasets.",
            "Improved frontend performance by optimizing Core Web Vitals (LCP, CLS, INP), reducing page load time by 45% through lazy loading, code splitting, and asset optimization."
        ]
    },
    {
        role: "Full Stack Developer Intern",
        company: "Collably Network",
        date: "Aug 2024 - Feb 2024",
        location: "Remote",
        logo: collablyLogo,
        description: [
            "Developed Coincurt using React.js, Node.js, Express.js, and MongoDB, delivering real-time cryptocurrency data with a role-based admin panel.",
            "Built Bounty Tap using Telegram Bot API, enabling automated airdrop campaigns and task tracking.",
            "Implemented backend services for a Telegram Reminder Bot with scheduled notifications, improving multi-group communication efficiency by 60%."
        ]
    }
];

const ExperienceItem = ({ exp, isLatest }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div 
            className={`exp-card ${isExpanded ? 'active' : ''} ${isLatest ? 'latest' : ''}`} 
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="exp-main">
                <div className="exp-left">
                    <div className="exp-logo">
                        <img src={exp.logo} alt={exp.company} className="exp-logo-img" />
                    </div>
                    <div className="exp-info">
                        <h3 className="exp-company">{exp.company}</h3>
                        <p className="exp-role">{exp.role}</p>
                    </div>
                </div>
                <div className="exp-right">
                    <span className="exp-date">{exp.date}</span>
                    <div className="exp-toggle">
                        <i className='bx bx-chevron-down'></i>
                    </div>
                </div>
            </div>
            
            <div 
                className="exp-details"
                style={{ maxHeight: isExpanded ? '2000px' : '0' }}
            >

                <ul className="exp-bullets">
                    {exp.description.map((point, i) => (
                        <li key={i} className="exp-point">
                            <span className="bullet"></span>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const WorkExperience = () => {
    return (
        <section className="workExperienceMain" id="workExperience">
            <div className="hero-main-container">
                <div className="headingPosition">
                    <h1 className="flexrow heading">&lt; My Work /&gt;</h1>
                    <h1 className="flexrow headingBottom">Experience</h1>
                </div>

                <div className="exp-list">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} exp={exp} isLatest={index === 0} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;

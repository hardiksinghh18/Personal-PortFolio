import React, { useState } from 'react';
import viLogo from './images/viLogo.png';
import collablyLogo from './images/collablyLogo.png';

const experiences = [
    {
        company: "Virtual Internships",
        location: "Remote",
        logo: viLogo,
        roles: [
            {
                title: "Associate Software Engineer",
                date: "Aug 2025 - Present"
            },
            {
                title: "Full Stack Developer Intern",
                date: "Feb 2025 - Jul 2025"
            }
        ],
        description: [
            "Shipped AI resume parsing, boosting onboarding rates from 35% to 85% and cutting profile setup time by 70%.",
            "Engineered AI-driven job description generation and a batch creation workflow to streamline internal operations.",
            "Migrated 400 APIs to RTK Query from createAsyncThunk, optimizing caching and global state management.",
            "Cut LCP from 7.6s to 5.0s (34%) and CLS via route/tab-level code splitting, lazy imports, and skeleton loaders.",
            "Optimized critical rendering path by deferring Datadog RUM and Sentry initializations until after the LCP element rendered.",
            "Utilized Sentry, Datadog, and Microsoft Clarity to systematically monitor application health, optimize frontend performance, and resolve live production bugs.",
            "Led legacy library migrations (Moment.js → Luxon, libphonenumber-js → google-libphonenumber, xlsx → exceljs) across 100+ endpoints.",
            "Built a reusable React library vi-filter with infinite scroll, and list virtualization for heavy datasets.",
            "Shipped UI components (React, RTK, MUI, TS), cutting code duplication and improving WCAG compliance.",
            "Scheduled Node.js Cron jobs for automated email notifications to active interns and corporate partners."
        ]
    },
    {
        company: "Collably Network",
        location: "Remote",
        logo: collablyLogo,
        roles: [
            {
                title: "Software Engineer",
                date: "Nov 2024 - Jan 2025"
            },
            {
                title: "Software Engineer Intern",
                date: "Aug 2024 - Oct 2024"
            }
        ],
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
                <div className="exp-left-container">
                    <div className="exp-company-row">
                        <div className="exp-logo">
                            <img src={exp.logo} alt={exp.company} className="exp-logo-img" />
                        </div>
                        <h3 className="exp-company">{exp.company}</h3>
                    </div>
                    
                    <div className="exp-roles-container">
                        {exp.roles ? (
                            exp.roles.map((r, idx) => (
                                <div key={idx} className="exp-role-item">
                                    <span className="exp-role-title">{r.title}</span>
                                    <span className="exp-role-date-desktop">{r.date}</span>
                                    <span className="exp-role-date-mobile">({r.date})</span>
                                </div>
                            ))
                        ) : (
                            <div className="exp-role-item">
                                <span className="exp-role-title">{exp.role}</span>
                                <span className="exp-role-date-desktop">{exp.date}</span>
                                <span className="exp-role-date-mobile">({exp.date})</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="exp-right">
                    {exp.date && <span className="exp-role-date-desktop">{exp.date}</span>}
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

import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import viLogo from './images/viLogo.png';
import collablyLogo from './images/collablyLogo.png';

const experiences = [
    {
        company: "Virtual Internships",
        logo: viLogo,
        role: "Associate Software Engineer",
        date: "Aug 2025 - Present",
        location: "London, England, Remote",
        isCurrent: true,
        description: [
            "Shipped <strong>AI resume parsing</strong>, boosting onboarding rates from <strong>35% to 85%</strong> and cutting profile setup time by <strong>70%</strong>.",
            "Migrated <strong>400+ APIs</strong> from createAsyncThunk to <strong>RTK Query</strong>, reducing state boilerplate by <strong>45%</strong> and cutting redundant network requests by <strong>30%</strong> via automated caching and deduplication.",
            "Drove <strong>Core Web Vitals</strong> improvements on high-traffic pages through route/tab-level code splitting, lazy loading, image optimization, and skeleton loaders; reduced <strong>LCP from 7.6s to 5.0s (34%)</strong> and improved CLS.",
            "Developed a <strong>Node.js + TypeORM</strong> cron-driven email notification system with a normalized database schema and idempotent delivery to re-engage POCs for intern rehiring, increasing rehire follow-through by <strong>40%</strong>.",
            "Engineered a concurrency-safe offer creation workflow using distributed <strong>Redis locks</strong> and database transactions, eliminating duplicate draft entries across horizontally scaled services."
        ]
    },
    {
        company: "Virtual Internships",
        logo: viLogo,
        role: "Full Stack Developer Intern",
        date: "Feb 2025 - Jul 2025",
        location: "London, England, Remote",
        isCurrent: false,
        description: [
            "Led legacy dependency migrations including <strong>Moment.js to Luxon</strong>, <strong>libphonenumber-js to google-libphonenumber</strong>, and <strong>xlsx to ExcelJS</strong> across 100+ endpoints.",
            "Built <strong>vi-filter</strong>, a reusable React filtering library with <strong>infinite scrolling</strong> and <strong>list virtualization</strong>, rendering <strong>10,000+ items</strong> seamlessly and reducing initial render time by <strong>60%</strong>.",
            "Engineered accessible frontend interfaces adhering to <strong>WCAG 2.1 AA</strong> standards, enhancing keyboard navigation, screen reader compatibility, and color contrast."
        ]
    },
    {
        company: "Collably Network",
        logo: collablyLogo,
        role: "Software Engineer",
        date: "Aug 2024 - Jan 2025",
        location: "Remote",
        isCurrent: false,
        description: [
            "Built <strong>React</strong> interfaces with <strong>Zustand</strong> state management, delivering <strong>30+ reusable components</strong> for a crypto platform.",
            "Developed backend services with <strong>GraphQL APIs</strong>, supporting <strong>20+ queries/mutations</strong> across core platform workflows.",
            "Designed <strong>PostgreSQL</strong> schemas with <strong>Prisma ORM</strong> across <strong>10+ models</strong>, implementing relational queries, indexing, and transactional data workflows."
        ]
    }
];

const ExperienceItem = ({ exp, isLatest }) => {
    const [isExpanded, setIsExpanded] = useState(isLatest);

    return (
        <div className={`exp-item-new ${isExpanded ? 'expanded' : ''}`}>
            <div className="exp-header-new" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="exp-header-left">
                    <div className="exp-company-title-row">
                        <div className="exp-logo-new">
                            <img src={exp.logo} alt={exp.company} className="exp-logo-img-new" />
                        </div>
                        <span className="exp-company-name">{exp.company}</span>
                        {exp.isCurrent && <span className="exp-green-dot"></span>}
                        <span className="exp-chevron">
                            {isExpanded ? <ExpandLessIcon className="chevron-icon" /> : <ExpandMoreIcon className="chevron-icon" />}
                        </span>
                    </div>
                    <span className="exp-role-subtitle">{exp.role}</span>
                </div>
                
                <div className="exp-header-right">
                    <span className="exp-date-range">{exp.date}</span>
                    <span className="exp-location">{exp.location}</span>
                </div>
            </div>
            
            <div className="exp-details-wrapper">
                <div className="exp-details-new">
                    <h4 className="exp-contributions-heading">Key Contributions</h4>
                    <ul className="exp-bullets-new">
                        {exp.description.map((point, i) => (
                            <li key={i} className="exp-bullet-item" dangerouslySetInnerHTML={{ __html: point }}></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const WorkExperience = () => {
    return (
        <section className="workExperienceMain" id="workExperience">
                <h2 className="section-heading-minimal">Experience.</h2>

                <div className="exp-list-new">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} exp={exp} isLatest={index === 0} />
                    ))}
                </div>
        </section>
    );
};

export default WorkExperience;

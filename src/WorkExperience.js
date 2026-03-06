import React from 'react';
import {
    Box,
    Typography,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Avatar
} from '@mui/material';


const experiences = [
    {
        role: "Full Stack Developer Intern",
        company: "Virtual Internships",
        date: "Feb 2025 - Present",
        location: "Remote",
        logoText: "VI",
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
        date: "Aug 2024 - Dec 2024",
        location: "Remote",
        logoText: "CN",
        description: [
            "Developed Coincurt using React.js, Node.js, Express.js, and MongoDB, delivering real-time cryptocurrency data with a role-based admin panel.",
            "Built Bounty Tap using Telegram Bot API, enabling automated airdrop campaigns and task tracking.",
            "Implemented backend services for a Telegram Reminder Bot with scheduled notifications, improving multi-group communication efficiency by 60%."
        ]
    }
];

const WorkExperience = () => {
    return (
        <section className="workExperienceMain" id="workExperience" style={{ padding: '4rem 10%', minHeight: '100vh', backgroundColor: 'var(--bg-color)' }}>
            <div className="headingPosition" style={{ marginBottom: '10rem' }}>
                <h1 className="flexrow heading">&lt; My Work /&gt;</h1>
                <h1 className="flexrow headingBottom">Experience</h1>
            </div>

            <Box sx={{ margin: '0 auto' }}>
                <Stepper orientation="vertical" sx={{
                    '& .MuiStepConnector-line': { borderColor: 'var(--border-subtle)', minHeight: '3rem', borderWidth: '0 0 0 2px' },
                    '& .MuiStepConnector-root': { marginLeft: { xs: '19px', sm: '29px' } }
                }}>
                    {experiences.map((exp, index) => (
                        <Step key={index} active={true}>
                            <StepLabel
                                StepIconComponent={() => (
                                    <Avatar
                                        sx={{
                                            width: { xs: 40, sm: 60 },
                                            height: { xs: 40, sm: 60 },
                                            bgcolor: 'var(--bg-color)',
                                            color: 'var(--text-color)',
                                            border: '2px solid var(--border-subtle)',
                                            fontSize: { xs: '1.2rem', sm: '2rem' },
                                            fontWeight: 'bold',
                                            zIndex: 2,
                                            boxShadow: '0 0 10px var(--glow-subtle)',
                                            position: 'relative'
                                        }}
                                    >
                                        {exp.logoText}
                                    </Avatar>
                                )}
                            >
                                {/* Empty StepLabel text to let StepContent hold the card */}
                            </StepLabel>
                            <StepContent sx={{ borderLeft: '2px solid var(--border-subtle)', ml: { xs: '19px', sm: '29px' }, mt: { xs: '-35px', sm: '-55px' }, pb: 4 }}>

                                {/* Main Content Card matching image layout */}
                                <Box sx={{
                                    p: { xs: 2.5, sm: 3, md: 5 },
                                    borderRadius: 3,
                                    border: '1px solid var(--border-subtle)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                                    ml: { xs: 2, sm: 5, md: 8 }
                                }}>

                                    {/* Details & Bullet Points */}
                                    <Box>
                                        <Typography variant="h3" component="h2" sx={{ color: 'var(--text-color)', fontWeight: 'bold', mb: 1.5, fontSize: { xs: '1.5rem', sm: '1.5rem' } }}>
                                            {exp.role} <span style={{ fontWeight: 'normal', color: 'var(--text-muted)' }}>at</span> <span style={{ color: '#3b82f6' }}>{exp.company}</span>
                                        </Typography>


                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                                            <Typography variant="body1" sx={{ color: 'var(--text-muted)', fontSize: '1.4rem', fontWeight: 600 }}>
                                                {exp.date}
                                            </Typography>
                                            <Typography variant="body1" sx={{ color: 'var(--text-muted)', fontSize: '1.4rem', fontWeight: 600 }}>
                                                |
                                            </Typography>
                                            <Typography variant="body1" sx={{ color: 'var(--text-muted)', fontSize: '1.4rem', fontWeight: 600 }}>
                                                {exp.location}
                                            </Typography>
                                        </Box>

                                        <Box component="ul" sx={{
                                            color: 'var(--text-highlight)',
                                            pl: { xs: '1.5rem', sm: '2.5rem' },
                                            lineHeight: '1.8',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '1.4rem',
                                            fontFamily: 'inherit'
                                        }}>
                                            {exp.description.map((item, i) => (
                                                <Typography component="li" key={i} sx={{ fontSize: { xs: '1.2rem', sm: '1.4rem' } }}>{item}</Typography>
                                            ))}
                                        </Box>
                                    </Box>

                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </section>
    );
};

export default WorkExperience;

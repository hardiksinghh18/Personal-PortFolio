import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { allProjects } from './components/AllProjects';
import WorkSection from './components/WorkSection';
import Navbar from './Navbar';
import ThemeToggle from './components/ThemeToggle';


const AllProjectsPage = () => {
    const navigate = useNavigate();

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="all-projects-page">
            <ThemeToggle />
            <Navbar />

            
            <section className="projects-gallery-section">
                <div className="gallery-header">
                    <button className="back-btn" onClick={() => navigate(-1)}>
                        <i className='bx bx-left-arrow-alt'></i>
                        Back to Home
                    </button>
                    
                    <div className="headingPosition">
                        <h1 className="flexrow heading">&lt; Complete /&gt;</h1>
                        <h1 className="flexrow headingBottom">Archive</h1>
                    </div>
                </div>

                <div className="projects-grid">
                    {allProjects.map((element) => (
                        <WorkSection key={element.id} data={element}></WorkSection>
                    ))}
                </div>
            </section>

            <footer className="gallery-footer">
                <p>© {new Date().getFullYear()} Hardik Singh. All projects curated with passion.</p>
            </footer>
        </div>
    );
};

export default AllProjectsPage;

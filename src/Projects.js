import React from 'react';
import { useNavigate } from 'react-router-dom';
import { allProjects } from './components/AllProjects';
import WorkSection from './components/WorkSection';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className="projects-section-new" id="projects">
      <h2 className="section-heading-minimal">Projects.</h2>

      <div className="projects-grid-new">
        <div className="grid-divider-v"></div>
        {allProjects.slice(0, 2).map((element) => (
          <WorkSection key={element.id} data={element}></WorkSection>
        ))}
      </div>

      <div className="view-all-container-new">
        <button className="view-all-btn-modern-new" onClick={() => navigate('/projects')}>
          View All Projects
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { allProjects } from './components/AllProjects';
import WorkSection from './components/WorkSection';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className="projects-section" id="projects">
      <div className="headingPosition">
        <h1 className="flexrow heading">&lt; Featured /&gt;</h1>
        <h1 className="flexrow headingBottom">Projects</h1>
      </div>

      <div className="projects-grid">
        {allProjects.slice(0, 3).map((element) => (
          <WorkSection key={element.id} data={element}></WorkSection>
        ))}
      </div>

      <div className="view-all-container">
        <button className="view-all-btn-modern" onClick={() => navigate('/projects')}>
          View All Projects 
          <i className='bx bx-right-arrow-alt'></i>
        </button>
      </div>
    </section>
  );
};

export default Projects;

import React, { useState } from 'react';
import { AllSkills } from './components/AllSkill';
import WorkSection from './components/WorkSection';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Toggle between showing 4 projects and all projects
  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <section className="project" id="projects">
      <div className="headingPosition">
        <h1 className="flexrow heading">&lt;Projects /&gt;</h1>
        <h1 className="flexrow headingBottom">Featured</h1>
      </div>

      <div className="projectContainer">
        {/* Map over the first 4 projects or all projects based on state */}
        {(showAll ? AllSkills : AllSkills.slice(0, 4)).map((element) => (
          <WorkSection key={element.id} data={element}></WorkSection>
        ))}
      </div>

      {/* Show All/Show Less button */}
      <div className="showAllButtonContainer">
        <button className="showAllButton" onClick={toggleShowAll}>
          {showAll ? 'Show Less Projects' : 'Show All Projects'}
        </button>
      </div>
    </section>
  );
};

export default Projects;

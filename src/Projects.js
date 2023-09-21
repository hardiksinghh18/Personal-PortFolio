import React from 'react'
import { AllSkills } from './components/AllSkill'
import WorkSection from './components/WorkSection'

const Projects = () => {
  return (
    <section className='project' id='projects'>
      <div className="projectContent">
        <h2 className='flexcolumn'> My Projects </h2>
        <div className='projectContainer' >
            {AllSkills.map((element)=>{
              return (
                <WorkSection  key={element.id} data={element}></WorkSection>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects

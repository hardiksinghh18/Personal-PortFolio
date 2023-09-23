import React from 'react'
import { AllSkills } from './components/AllSkill'
import WorkSection from './components/WorkSection'

const Projects = () => {
  return (
    <section className='project' id='projects'>
      
        <h3 className='flexcolumn highlightHeading'> My Projects </h3>
        <div className='projectContainer' >
            {AllSkills.map((element)=>{
              return (
                <WorkSection  key={element.id} data={element}></WorkSection>
              )
            })}
        </div>
    
    </section>
  )
}

export default Projects

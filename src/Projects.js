import React from 'react'
import { AllSkills } from './components/AllSkill'
import WorkSection from './components/WorkSection'

const Projects = () => {
  return (
    <section className='project' id='projects'>
      
      <div className='headingPosition'>
            <h1 className='flexrow heading ' >&lt;Projects /&gt;</h1>
            <h1 className='flexrow headingBottom  ' >Featured</h1>

            </div>  <div className='projectContainer' >
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

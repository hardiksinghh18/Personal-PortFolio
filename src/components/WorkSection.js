import React from 'react'
import ServiceModal from './ServiceModal'

const WorkSection = ({data}) => {
  return (
    <div className='singleProject'>
      <div className="projectImage"><img src={data.img} alt={data.title} /></div>
      <div className="projectDetail ">
      <div className='projectName'><h4>{data.title.toUpperCase()}</h4> <a href='#'><i class='bx bxl-github' ></i></a></div>
      <ServiceModal value={"project"} data={data}/>
      </div>
    </div>
  )
}

export default WorkSection

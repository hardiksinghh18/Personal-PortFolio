import React from 'react'
import ServiceModal from './ServiceModal'

const WorkSection = ({ data }) => {
  return (
    <div className='singleProject' data-aos="fade-right">
      <div className="projectImage"><img src={data.img} alt={data.title} /></div>
      <div className="projectDetail ">
        <div className='projectName'><h4>{data.title.toUpperCase()}</h4> <a href={data.github} target='_blank' className='githublink'><i className='bx bxl-github' ></i></a></div>
        <div className="linkButton">
          <ServiceModal value={"project"} data={data} />
          {data.link&&<a href={data.link} target='_blank' className='btn2 '>Go Live</a>}
        </div>
      </div>
    </div>
  )
}

export default WorkSection

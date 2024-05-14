import React from 'react'
import ServiceModal from './ServiceModal'

const WorkSection = ({ data }) => {
  return (
    <div className='singleProject' data-aos="fade-right">
      <div className='circles'>
         <div className='circle1'></div>
         <div className='circle2'></div>
         <div className='circle3'></div>
      </div>
      <div className='line'></div>
      
      <div className="projectDetail">
    
        <div className='linkProject'>
          <div className='projectName '>
            <h4>{data.title.toUpperCase()}</h4>
          </div>
          <div className='flex'>

            {data.link&&<a href={data.link} target='_blank' className='githublink'><i className='bx bx-link-external '></i></a>}
            <a href={data.github} target='_blank' className='githublink'><i className='bx bxl-github' ></i></a>
            {/* <ServiceModal value={"project"} data={data} /> */}
          </div>
        </div>
        <div className="projectImage">
        <a href={data.link}><img src={data.img} alt={data.title} /></a>
       </div>
        <div className="linkButton">
          {data && data?.tech?.map((technology,index)=>{
            return (
               <div key={index} className='techStackBorder'><p>{technology}</p></div>
            )
          })}
        
          
        </div>
      </div>
    </div>
  )
}

export default WorkSection

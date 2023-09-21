import React from 'react'
import ServiceModal from './ServiceModal'

const WorkSection = ({data}) => {
  return (
    <div className='singleProject'>
      <img src={data.img} alt="" />
      <h4>{data.title.toUpperCase()}</h4>
      <ServiceModal value={"project"} data={data}/>
    </div>
  )
}

export default WorkSection

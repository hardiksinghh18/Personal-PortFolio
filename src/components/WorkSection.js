import React from 'react'

const WorkSection = ({ data }) => {
  return (
    <div className='singleProject'>
      <div className="projectDetail">

        <div className='linkProject'>
          <div className='projectName '>
            <h4>{data.title.toUpperCase()}</h4>
          </div>
          <div className='flex'>
            {data.link && <a href={data.link} target='_blank' rel='noreferrer' className='githublink'><i className='bx bx-link-external '></i></a>}
            <a href={data.github} target='_blank' rel='noreferrer' className='githublink'><i className='bx bxl-github' ></i></a>
          </div>
        </div>
        <div className="projectImage">
          {data.img ? (
            <a href={data.link} target='_blank' rel='noreferrer'><img src={data.img} alt={data.title} /></a>
          ) : (
            <div className="placeholderImage">
              <span>{data.title.charAt(0)}</span>
            </div>
          )}
        </div>
        <div className="linkButton">
          {data && data?.tech?.map((technology, index) => {
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

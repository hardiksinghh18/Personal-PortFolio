import React from 'react'
import { Tooltip } from '@mui/material';

const WorkSection = ({ data }) => {
  return (
    <div className='proj-card'>
      <div className="proj-image-container">
        {data.img ? (
          <img src={data.img} alt={data.title} className="proj-img" />
        ) : (
          <div className="proj-placeholder">
            <span>{data.title.charAt(0)}</span>
          </div>
        )}
      </div>

      <div className="proj-content">
        <div className="proj-header">
          <h3 className="proj-title">{data.title}</h3>
          
          <div className="proj-links">
            {data.link && (
              <a href={data.link} target="_blank" rel="noreferrer" className="proj-live-badge">
                <span className="live-dot"></span>
                Live
              </a>
            )}
            <a href={data.github} target="_blank" rel="noreferrer" className="proj-github-link">
              <i className='bx bxl-github'></i>
            </a>
          </div>
        </div>

        <Tooltip title={data.desc} arrow placement="bottom" enterDelay={300}>
          <p className="proj-description">{data.desc}</p>
        </Tooltip>
      </div>
    </div>
  )
}

export default WorkSection

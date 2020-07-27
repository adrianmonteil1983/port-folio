import React from 'react';
import './Project.css';
import projectsList from './projectsList';

const Project = ({page}) => {
  return (
      <div id="containerProject">
        <div id="picture" text={`technologies used: ${projectsList[page].technos}`} >
          <img src={projectsList[page].picture} alt='project'/>
        </div>
        <h1>{projectsList[page].name}</h1>
        <a id='github' href={projectsList[page].github} target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/material-outlined/60/000000/github.png" alt='github'/></a>
        <a id='link' href={projectsList[page].website} target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/material-outlined/48/000000/link.png" alt='link'/></a>
      </div>   
  )
}

export default Project

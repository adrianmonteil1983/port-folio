import React from 'react';
import './Introduction.css';
import resume from '../../repo/adrian_monteil_fullstack.pdf';

const Introduction = () => {
  return (
    <div id="introduction">
      <h1 data-text="DEVELOPER">DEVELOPER</h1>
      <div id='container-button'>
        <button><a href={resume} dowload='resume.pdf' target='_blank' rel='noopener noreferrer'>RESUME</a></button>
      </div>
      
    </div>
  )
}

export default Introduction

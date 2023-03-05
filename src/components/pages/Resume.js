/* jshint esversion: 6 */
import React from 'react';
import { resumeArray } from '../../utils/project.const.data.js';
import "./resume.css";
import resume from "../../assets/resume.pdf";


function Resume () {

  return (
    <div className="resumeWrapper">
        <div className='wraperHeader'>
            <h1>Resume</h1>
            <a href={resume} download="Maksim_Razuvaev_Resume.pdf" target="_blank" rel="noopener noreferrer">Download my resume</a>
        </div>
        {
            resumeArray.map(project => {
                return(
                <div className="resume">
                    <div>{project.title}</div>
                    <ul>
                        {
                            project.technologies.map(techPoints => {
                                return(
                                    <li>{techPoints}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                )
            })
        }
    </div>
  );
}

export default Resume;

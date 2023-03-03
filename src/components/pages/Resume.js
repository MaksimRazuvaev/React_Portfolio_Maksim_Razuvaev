/* jshint esversion: 6 */
import React from 'react';
import { resumeArray, resumeLink } from '../../utils/project.const.data.js';
import "./resume.css";


function Resume () {

  return (
    <div className="resumeWrapper">
        <div className='wraperHeader'>
            <h1>Resume</h1>
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">Download my resume</a>
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

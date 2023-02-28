/* jshint esversion: 6 */
import React from 'react';
import { resumeArray, resumeLink } from '../../utils/project.const.data.js';


function Resume () {

  return (
    <div className="resume-wrapper">
        <div>
            <h3>Resume</h3>
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">Download my resume</a>
        </div>
        {
            resumeArray.map(project => {
                return(
                <div className="resume">
                    <div className="title">{project.title}</div>
                    <ul className="tech">
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

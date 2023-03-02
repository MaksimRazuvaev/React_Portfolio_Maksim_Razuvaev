/* jshint esversion: 6 */
import React from 'react';
import { projectArray } from '../../utils/project.const.data.js';
import "./portfolio.css";
import githubimage from "../../../src/assets/images/GitHub.png";



function Portfolio () {

  return (
    <div className="project-wrapper">
        {
            projectArray.map(project => {
                return(
                <div className="projectCard">
                    <div className="title">{project.title}</div>
                    <div className="desc">{project.description}</div>
                    <a href={project.appLink}><img src={project.image} alt="My Website" width="100%"/></a>
                    <a href={project.gitHubLink}>
                        <img title="github" alt="github" src={githubimage} target="_blank" rel="noopener noreferrer" width="32px"></img></a>


                    <ul className="tech">
                        {
                            project.tech.map(techData => {
                                return(
                                    <li>{techData}</li>
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

export default Portfolio;

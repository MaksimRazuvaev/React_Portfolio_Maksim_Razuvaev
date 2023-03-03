/* jshint esversion: 6 */
import React from 'react';
import { projectArray } from '../../utils/project.const.data.js';
import "./portfolio.css";
import githubimage from "../../../src/assets/images/GitHub.png";



function Portfolio () {

  return (
    <div>
        <h1>Portfolio</h1>
        <div className="project-wrapper">
        {
            projectArray.map(project => {
                return(
                <div className="projectCard">
                    <h3 className="title">{project.title}</h3>
                    <a href={project.appLink}><img src={project.image} alt="My Website" width="100%"/></a>
                    <a href={project.gitHubLink} className="title">
                        <img title="github" alt="github" src={githubimage} target="_blank" rel="noopener noreferrer" width="32px"></img></a>
                    <div className="title">{project.description}</div>
                    <ul className="title">Technologies:
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
    </div>
  );
};

export default Portfolio;

/* jshint esversion: 6 */
import React from 'react';
import { projectArray } from '../../utils/project.const.data.js';
import "./portfolio.css";
import githubimage from "../../../src/assets/images/GitHub.png";



function Portfolio () {

  return (
    <div className='portfolioWraper'>
        <h1>Portfolio</h1>
        <div className="project-wrapper">
        {
            projectArray.map(project => {
                return(
                <div className="projectCard">
                    <h3 className="title">{project.title}</h3>
                    <a href={project.appLink} target="_blank" rel="noreferrer">
                        <img src={project.image} alt="My Website" width="100%"/>
                    </a>
                    <a href={project.gitHubLink} className="title" target="_blank" rel="noopener noreferrer" >
                        <img title="github" alt="github" src={githubimage} width="32px"></img>
                    </a>
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

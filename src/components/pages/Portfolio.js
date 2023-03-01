/* jshint esversion: 6 */
import React from 'react';
import { projectArray } from '../../utils/project.const.data.js';
import "./portfolio.css";



function Portfolio () {

  return (
    <div className="project-wrapper">
        {
            projectArray.map(project => {
                return(
                <div className="project">
                    <div className="title">{project.title}</div>
                    <div className="desc">{project.description}</div>
                    <a href={project.link}><img src={project.image} alt="My Website"/></a>

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

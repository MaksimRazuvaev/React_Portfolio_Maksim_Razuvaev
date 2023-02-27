import React from 'react';
import { projectArray } from '../../utils/project.const.data.js';


// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function Portfolio () {

  return (
    <div className="project-wrapper">
        {
            projectArray.map(project => {
                    return(
                    <div className="project">
                        <div className="title">{project.title}</div>
                        <div className="desc">{project.description}</div>
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

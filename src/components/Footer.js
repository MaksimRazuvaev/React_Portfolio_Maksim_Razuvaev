/* jshint esversion: 6 */
import React from 'react';
import githubimage from "../../src/assets/images/GitHub.png";
import linkedinimage from "../../src/assets/images/LinkedIn.svg";
import devimage from "../../src/assets/images/techDev.png";
import { gitHubLink, linkedInLink, devLink } from '../utils/project.const.data.js';

function Footer(){
    return(
        <div >
            <div >
                <div >
                    <p>Made with <span role="img" aria-label="heart icon">❤️</span> using React</p>
                    <p>© Maksim Razuvaev</p>
                </div>
                <div >
                    <p>Connect</p>
                    <div>
                        <a href={gitHubLink}>
                            <img title="github" alt="github" src={githubimage} target="_blank" rel="noopener noreferrer" width="32px"></img></a>
                        <a href={linkedInLink}>
                            <img title="linkedin" alt="linkedin" src={linkedinimage} target="_blank" rel="noopener noreferrer" width="32px"></img></a>
                        <a href={devLink}>
                            <img title="DEv" alt="DEV" src={devimage} target="_blank" rel="noopener noreferrer" width="32px"></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
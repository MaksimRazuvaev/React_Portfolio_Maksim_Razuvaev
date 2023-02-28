import React from 'react';
import githubimage from "../../src/assets/images/GitHub.png";
import linkedinimage from "../../src/assets/images/LinkedIn.svg";
import devimage from "../../src/assets/images/techDev.png";

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
                        <a href="https://github.com/MaksimRazuvaev" target="_blank" rel="noopener noreferrer">
                            <img title="github" alt="github" src={githubimage} width="32px"></img></a>
                        <a href="https://www.linkedin.com/in/maksim-razuvaev/" target="_blank" rel="noopener noreferrer">
                            <img title="linkedin" alt="linkedin" src={linkedinimage} width="32px"></img></a>
                        <a href="https://dev.to/maksimrazuvaev/" target="_blank" rel="noopener noreferrer">
                            <img title="DEv" alt="DEV" src={devimage} width="32px"></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
import React from 'react';

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
                            <img title="github" alt="github" src="../../src/assets/images/GitHub.png" width="32px"></img></a>
                        <a href="https://www.linkedin.com/in/maksim-razuvaev/" target="_blank" rel="noopener noreferrer">
                            <img title="linkedin" alt="linkedin" src="../../src/assets/images/LinkedIn.svg" width="32px"></img></a>
                        <a href="https://dev.to/maksimrazuvaev/" target="_blank" rel="noopener noreferrer">
                            <img title="DEv" alt="DEV" src="../../src/assets/images/techDev.png" width="32px"></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
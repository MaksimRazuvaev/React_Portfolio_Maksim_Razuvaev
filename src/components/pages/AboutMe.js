/* jshint esversion: 6 */
import React from 'react';
import avatarimage from "../../../src/assets/images/avatar.png";
import "./aboutme.css";


export default function AboutMe() {
  return (
    <div className='aboutMeMain'>
      <h1>About me</h1>
      <img src={avatarimage} alt="Avatar" class="avatar"></img>
      <p>
      I am a full-stack web developer. I am working on earning a certificate of Full Stack Codding Bootcamp - 
      at the University of Washington, where I am developing skills in HTML5, CSS3, JavaScript, jQuery, Express.js, 
      React.js, Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL, 
      Git, and more. 
      </p>
      <p>
      As an innovative problem-solver passionate about developing apps, my current focus is on developing web applications with deep 
      dives into the server and client-side API. Upon completing the bootcamp, I am going to continue my studies independently to learn 
      more about Python, C#, and Amazon Web Services.
      </p>
    </div>
  );
}

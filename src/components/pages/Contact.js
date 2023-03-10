/* jshint esversion: 6 */
import React, { useState } from 'react';
import './contact.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email is invalid, or user name is empty');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!userName) {
        setErrorMessage(
          `Please, tell me what is your name?`
        );
        return;
    }
    if (!message) {
      setErrorMessage(
        `${userName} tell what is your question or statement`
      );
      return;
    }
    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <p>Hello {userName}</p>

      <form className="form">
        <label for="userName">Name:</label>
        <input className="text-input"
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <label for="email">Email address:</label>
        <input className="text-input"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="me@example.com"
        />
        <label for="message">Message:</label>
        <input className="text-input message"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
        />
        
        {errorMessage && (
        <div className='errorMessage'>
          <p className="error-text">{errorMessage}</p>
        </div>
        )}

        <button className="submitButton" type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;

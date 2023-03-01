/* jshint esversion: 6 */
import React from 'react';
import "./Header.css";


function Header ({ currentPage, handlePageChange }) {
  return (
    <div className='headerMain'>
      <h3>Maksim Razuvaev</h3>
      <ul className="nav nav-tabs ulNav">
        <li className="nav-item">
          <a
            href="#AboutMe"
            onClick={() => handlePageChange('AboutMe')}

            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          >
            AboutMe
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Contact"
            onClick={() => handlePageChange('Contact')}

            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}

            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Resume"

            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;

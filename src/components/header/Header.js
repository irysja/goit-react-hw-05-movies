//import React, { useState } from 'react';
import React from 'react';
//import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import { searchMovies } from '../api/Api'; // Import the searchMovies function
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

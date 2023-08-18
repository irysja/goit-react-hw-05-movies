/*import React from 'react';

function Header() {
  return (
    <header>
      <h1>Movie Database App</h1>
    </header>
  );
}

export default Header;*/

// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Movie Database App</h1>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;






  

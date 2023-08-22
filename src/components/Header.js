/*import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';


function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const location = useLocation();

  const handleSearch = event => {
    event.preventDefault();
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="header">
      {/*<h1>Movie Database App</h1>*//*}
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
      {location.pathname === '/movies' && (
        <div className="search-container">
          {!isSearchOpen ? (
            <button onClick={toggleSearch}>Open Search</button>
          ) : (
            <form onSubmit={handleSearch}>
              <input
                type="text"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                placeholder="Search movies..."
              />
              <button type="submit">Search</button>
              <button onClick={toggleSearch}>Close Search</button>
          </form>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;*/

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { searchMovies } from './Api'; // Import the searchMovies function
import './Header.css';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = async (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      try {
        const response = await searchMovies(searchQuery);
        console.log('Search Response:', response); // Log the response to see what's returned
  
        if (response.results.length > 0) {
          const movieId = response.results[0].id;
          console.log('Movie ID:', movieId); // Log the extracted movie ID
          navigate(`/movies/${movieId}`);
        } else {
          console.log('Movie not found.');
        }
      } catch (error) {
        console.error('Error searching for movie:', error);
      }
    }
  };
  

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

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
      {location.pathname === '/movies' && (
        <div className="search-container">
          {!isSearchOpen ? (
            <button onClick={toggleSearch}>Open Search</button>
          ) : (
            <form onSubmit={handleSearch}>
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search movies..."
              />
              <button type="submit">Search</button>
              <button onClick={toggleSearch}>Close Search</button>
            </form>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;


















  

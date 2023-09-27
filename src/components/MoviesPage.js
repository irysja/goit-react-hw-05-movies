/*import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { getTrendingMovies, searchMovies } from './Api';
import Layout from './Layout'; // Import Layout component

function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = async event => {
    event.preventDefault();
    try {
      const data = await searchMovies(searchQuery);
      setSearchResults(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  //const navigate = useNavigate();

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <Layout> {/* Wrap the content with the Layout component *//*}
      <div>
        <div className="search-container">
          {isSearchOpen ? (
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
          ) : (
            <button onClick={toggleSearch}>Open Search</button>
          )}
        </div>
        <ul>
          {searchResults.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default MoviesPage;*/

// src/components/MoviesPage.js
import React, { useState } from 'react'; // Оставляем только useState, если другие переменные не используются
import { Link } from 'react-router-dom';
import { searchMovies } from './Api';
import Layout from './Layout'; 

function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = async event => {
    event.preventDefault();
    try {
      const data = await searchMovies(searchQuery);
      setSearchResults(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <Layout>
      <div>
        <div className="search-container">
          {isSearchOpen ? (
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
          ) : (
            <button onClick={toggleSearch}>Open Search</button>
          )}
        </div>
        <ul>
          {searchResults.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default MoviesPage;


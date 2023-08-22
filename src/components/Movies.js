/*import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { getTrendingMovies, searchMovies } from './Api';

function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(data => {
        setTrendingMovies(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSearch = async event => {
    event.preventDefault();
    try {
      const data = await searchMovies(searchQuery);
      setSearchResults(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
        />
        <button type="submit">Search</button>
  </form>
      <h2>Trending Movies</h2>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            {/*<Link to={`https://api.themoviedb.org/3/movies/${movie.id}?language=en-US`}>
              {movie.title}
        </Link>*//*}
        <Link to={`/movies/${movie.id}`}> {movie.title} </Link>
          </li>
        ))}
      </ul>
      <h2>Search Results</h2>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;*/

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { getTrendingMovies } from './Api';

function Movies() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(data => {
        setTrendingMovies(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Search Movies</h1>
      {/* Search form is removed */}
      <h2>Trending Movies</h2>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}> {movie.title} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;




















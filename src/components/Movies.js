
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




















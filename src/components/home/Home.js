import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const API_KEY = '5c25f1c14a1f0927c063260c10836fbe';
    const BASE_URL = 'https://api.themoviedb.org/3';

    fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setTrendingMovies(data.results);
      })
      .catch(error => {
        console.error('Error fetching trending movies:', error);
      });
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;








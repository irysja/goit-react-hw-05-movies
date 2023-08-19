/*import React, { useEffect, useState } from 'react'; 
import { getTrendingMovies } from './Api';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(data => setTrendingMovies(data.results))
      .catch(error => console.error(error));
  }, []);
  
  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;*/

/*import React, { useEffect, useState } from 'react';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', {
      method: 'GET',
      headers: {
        Authorization: '2ce7a18d838cceed905878ad2c5994f4',
        Accept: 'https://api.themoviedb.org/3'
      }
    })
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
      <h1>Trending Movies</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;*/

import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const API_KEY = '2ce7a18d838cceed905878ad2c5994f4';
    const BASE_URL = 'https://api.themoviedb.org/3';

    fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
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
      <h1>Trending Movies</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;



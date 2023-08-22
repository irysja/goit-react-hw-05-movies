import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

/*import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout'; // Import Layout component

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
    <Layout>
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
    </Layout>
  );
}

export default Home;*/






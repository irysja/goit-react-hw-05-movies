/*import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useParams, Route, Routes, Outlet, Link } from 'react-router-dom';
import { getMovieDetails } from './Api';
import './MovieDetails.css';


const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

function MovieDetails() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => {
        setMovieData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details-container">
      <div className="movie-details-header">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
          alt={movieData.title}
        />
        <div className="movie-details-title">
          <h2>{movieData.title}</h2>
          <p>{movieData.release_date}</p>
        </div>
      </div>
      <div className="movie-details-overview">
        <p>{movieData.overview}</p>
      </div>
      <nav className="movie-details-nav">
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
      <Outlet />
    </div>
  );
}

export default MovieDetails;*/

import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useParams, Route, Routes, Outlet, Link } from 'react-router-dom'; // Removed useNavigate
import { getMovieDetails } from './Api';
import './MovieDetails.css';

const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

function MovieDetails() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => {
        setMovieData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details-container">
      <div className="movie-details-header">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
          alt={movieData.title}
        />
        <div className="movie-details-title">
          <h2>{movieData.title}</h2>
          <p>{movieData.release_date}</p>
        </div>
      </div>
      <div className="movie-details-overview">
        <p>{movieData.overview}</p>
      </div>
      <nav className="movie-details-nav">
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        {/* Button to go back to Home */}
        <Link to="/">Go Back</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
      <Outlet />
    </div>
  );
}

export default MovieDetails;







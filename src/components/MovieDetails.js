/*import React from 'react';
import { useParams, Link, Route } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';

function MovieDetails() {
  const { movieId } = useParams();

  return (
    <div>
      <h1>Movie Details</h1>
      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      <Route path="/movies/:movieId/cast" element={<Cast />} />
      <Route path="/movies/:movieId/reviews" element={<Reviews />} />
    </div>
  );
}

export default MovieDetails;*/

import React from 'react';
import { useParams, Route, Routes, Outlet, Link } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';

function MovieDetails() {
  const { movieId } = useParams();

  const movieData = {
    title: 'Movie Title',
    overview: 'Movie Overview',
    releaseDate: 'Release Date',
    
  };

  return (
    <div>
      <h2>{movieData.title}</h2>
      <p>{movieData.releaseDate}</p>
      <p>{movieData.overview}</p>
      <nav>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </nav>
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
      <Outlet /> {/* Отображает вложенные маршруты */}
    </div>
  );
}

export default MovieDetails;

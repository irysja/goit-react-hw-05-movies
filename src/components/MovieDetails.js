import React from 'react';
import { useParams, Link, Route } from 'react-router-dom'; // Remove the duplicate import of 'useParams'
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

export default MovieDetails;







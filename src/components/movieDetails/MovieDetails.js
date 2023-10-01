import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useParams, Route, Routes, Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../api/Api';
import './MovieDetails.css';
import Layout from '../layout/Layout';

const Cast = lazy(() => import('../cast/Cast'));
const Reviews = lazy(() => import('../reviews/Reviews'));

function MovieDetails() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Access the state parameter
  const searchResults = location.state ? JSON.parse(location.state.searchResults) : null;
  
  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => {
        setMovieData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  const handleGoBack = () => {
    if (searchResults) {
      // Use the stored search results to navigate back
      navigate('/movies', { state: { searchResults: JSON.stringify(searchResults) } });
    } else {
      // If there are no stored search results, navigate to the root
      navigate('/');
    }
  };

  if (!movieData) {
    return <div>Loading...</div>;
  }

  const posterPath = movieData.poster_path ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}` : null;

  return (
    <Layout>
      <div className="movie-details-container">
        <div className="movie-details-header">
          {posterPath ? (
            <img src={posterPath} alt={movieData.title} />
          ) : (
            <p>No poster available</p>
          )}
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
          <button onClick={handleGoBack}>Go Back</button>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
        <Outlet />
      </div>
    </Layout>
  );
}

export default MovieDetails;

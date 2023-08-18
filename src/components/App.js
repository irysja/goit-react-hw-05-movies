import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails'; // Import the MovieDetails component
import Cast from './Cast'; // Import the Cast component
import Reviews from './Reviews'; // Import the Reviews component

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} /> {/* Route for MovieDetails */}
          {/* Add more routes for other components */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;



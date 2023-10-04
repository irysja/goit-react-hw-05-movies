
import React, { lazy, Suspense } from 'react';
import { Route, Routes ,NavLink } from 'react-router-dom';
import Home from '../home/Home';
import MovieDetails from '../movieDetails/MovieDetails';
import Cast from '../cast/Cast';
import Reviews from '../reviews/Reviews';
import Layout from '../layout/Layout';
import MoviesPage from '../moviesPage/MoviesPage';



const MoviesPageLazy = lazy(() => import('../moviesPage/MoviesPage'));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/movies/*" element={<MoviesPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/movies" element={(
          <Suspense fallback={<div>Loading...</div>}>
            <MoviesPageLazy />
          </Suspense>
        )} />
      </Routes>
    </div>
  );
}


export default App;









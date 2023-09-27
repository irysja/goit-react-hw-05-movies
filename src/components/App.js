
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import Layout from './Layout';
import MoviesPage from './MoviesPage';

const MoviesPageLazy = lazy(() => import('./MoviesPage'));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/movies/*" element={<Movies />} />
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

/*import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import Layout from './Layout';
import MoviesPage from './MoviesPage';

const MoviesPageLazy = lazy(() => import('./MoviesPage'));

function App() {

  return (
    <div>
      <Routes>
        {/* Роут без шляху "/" для використання як роута за замовчуванням *//*}
        <Route element={<Layout />}>
          {/* Добавляем Home внутри Layout *//*}
          <Route index element={<Home />} /> 
          <Route path="/movies/*" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/movies" element={(
            <Suspense fallback={<div>Loading...</div>}>
              <MoviesPageLazy />
            </Suspense>
          )} />
        </Route>
      </Routes>
    </div>
  );
  }
export default App;*/










/*import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import Layout from './Layout'; 
import MoviesPage from './MoviesPage'; 

function App() {
  return (
    <div>
      <Routes>
        <Route path="/"element={<Layout><Home /></Layout>}/>
        <Route path="movies/*"element={<Layout><Movies /> </Layout> } />
        <Route path="movies/:movieId/*"element={<Layout><MovieDetails />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} /></Layout>}/>
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
}

export default App;*/

/*import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import Layout from './Layout';
import MoviesPage from './MoviesPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />

        {/* MoviesPage route *//*}
        <Route path="/movies" element={<MoviesPage />} />

        {/* Movies and MovieDetails routes *//*}
        <Route path="movies/*" element={<Movies />} />
        <Route path="movies/:movieId/*" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;*/

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import Layout from './Layout';
import MoviesPage from './MoviesPage';

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
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
}

export default App;





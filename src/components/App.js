
/*import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
//import Movies from './Movies'; // Import your other components similarly

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} /> }
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;*/

/*import React, { Suspense } from 'react'; // Remove the 'lazy' import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

// Remove the 'lazy' imports for other components
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other Route components here }
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;*/

/*import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import Home from './Home'; // Подключите другие компоненты здесь, если есть

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Добавьте другие компоненты Route здесь }
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;*/

//import React from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;







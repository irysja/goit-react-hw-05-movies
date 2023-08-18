import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './components/App'; 

const LazyLoadedComponent = () => (
  <div>
    <h2>MyComponent</h2>
    <p>This is a lazy-loaded component!</p>
  </div>
);

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/lazy" element={<LazyLoadedComponent />} />
    </Routes>
  </Router>
);










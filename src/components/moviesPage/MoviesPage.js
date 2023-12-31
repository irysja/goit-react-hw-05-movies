import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../api/Api';
import Layout from '../layout/Layout';

function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  

  // Load search results from local storage when the component mounts
  /*useEffect(() => {
    const storedResults =
      JSON.parse(localStorage.getItem('searchResults')) || [];
    setSearchResults(storedResults);
  }, []);*/
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    if (query) {
      setSearchQuery(query);
    }
  }, []);
  

  /*const handleSearch = async event => {
    event.preventDefault();
    try {
      const data = await searchMovies(searchQuery);
      setSearchResults(data.results);

      // Save search results to local storage
      localStorage.setItem('searchResults', JSON.stringify(data.results));
    } catch (error) {
      console.error(error);
    }
  };*/
  const handleSearch = async event => {
    event.preventDefault();
    try {
      const data = await searchMovies(searchQuery);
      setSearchResults(data.results);
  
      // Сохраняем результаты в локальное хранилище
      localStorage.setItem('searchResults', JSON.stringify(data.results));
  
      // Обновляем квери параметр в URL строке
      const urlParams = new URLSearchParams();
      urlParams.set('query', searchQuery);
      window.history.replaceState(null, '', `?${urlParams}`);
    } catch (error) {
      console.error(error);
    }
  };
  

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Clear local history (search results) on new search
  const clearSearchHistory = () => {
    localStorage.removeItem('searchResults');
    setSearchResults([]);
  };

  return (
    <Layout>
      <div>
        <div className="search-container">
          {isSearchOpen ? (
            <form onSubmit={handleSearch}>
              <input
                type="text"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                placeholder="Search movies..."
              />
              <button type="submit" onClick={clearSearchHistory}>
                Search
              </button>
              <button onClick={toggleSearch}>Close Search</button>
            </form>
          ) : (
            <button onClick={toggleSearch}>Open Search</button>
          )}
        </div>
        <ul>
          {searchResults.map(movie => (
            <li key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                state={{ searchResults: JSON.stringify(searchResults) }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default MoviesPage;

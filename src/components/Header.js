import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { searchMovies } from './Api'; // Import the searchMovies function
import './Header.css';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = async (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      try {
        const response = await searchMovies(searchQuery);
        console.log('Search Response:', response); // Log the response to see what's returned

        if (response.results.length > 0) {
          const movieId = response.results[0].id;
          console.log('Movie ID:', movieId); // Log the extracted movie ID
          navigate(`/movies/${movieId}`);
        } else {
          console.log('Movie not found.');
        }
      } catch (error) {
        console.error('Error searching for movie:', error);
      }
    }
  };
  
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

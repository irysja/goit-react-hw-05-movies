/*const API_KEY = '2ce7a18d838cceed905878ad2c5994f4';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching trending movies: ' + error.message);
  }
};

export const searchMovies = async query => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error searching movies: ' + error.message);
  }
};*/


// Api.js
const API_KEY = '5c25f1c14a1f0927c063260c10836fbe';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching trending movies: ' + error.message);
  }
};

export const searchMovies = async query => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error searching movies: ' + error.message);
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching movie details: ' + error.message);
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching movie reviews: ' + error.message);
  }
};

export const getMovieCast = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
    const data = await response.json();
    return data.cast;
  } catch (error) {
    throw new Error('Error fetching movie cast: ' + error.message);
  }
};







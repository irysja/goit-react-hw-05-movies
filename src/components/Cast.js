/*import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

async function fetchCastData(movieId) {
  try {
    const response = await fetch(
      `https://api.example.com/movies/${movieId}/cast`
    );
    const data = await response.json();
    return data.cast;
  } catch (error) {
    throw new Error('Error fetching cast data: ' + error.message);
  }
}

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCastData(movieId)
      .then(data => setCast(data))
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <strong>{actor.name}</strong> as {actor.character}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;*/

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from './Api';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCastData() {
      try {
        const castData = await getMovieCast(movieId);
        setCast(castData);
        setError(null);
      } catch (error) {
        console.error(error);
        setError('Error fetching cast data. Please try again later.');
      }
    }

    fetchCastData();
  }, [movieId]);

  return (
    <div>
      <h3>Cast</h3>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cast;









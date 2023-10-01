import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../api/Api';

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









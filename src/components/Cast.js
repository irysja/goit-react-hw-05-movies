import React, { useEffect, useState } from 'react';
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

export default Cast;

/*import React from 'react';

function Cast() {
  // Здесь можно получить данные о актерском составе из API или другого источника
  const castData = [
    { id: 1, name: 'Actor 1', character: 'Character 1' },
    { id: 2, name: 'Actor 2', character: 'Character 2' },
    // ... другие актеры
  ];

  return (
    <div>
      <h3>Cast</h3>
      <ul>
        {castData.map(actor => (
          <li key={actor.id}>
            <p>{actor.name}</p>
            <p>{actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;*/







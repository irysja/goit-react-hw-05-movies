import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from './Api'; // Замените на вашу функцию для получения обзоров

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Здесь вызываем вашу функцию для получения обзоров
    getMovieReviews(movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <strong>{review.author}</strong>: {review.content}
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}

export default Reviews;






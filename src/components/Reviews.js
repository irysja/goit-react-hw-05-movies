import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews information using movieId
    // For simplicity, let's assume you have an API function to fetch reviews data
    // Replace this with your actual API call
    fetchReviewsData(movieId)
      .then(data => setReviews(data))
      .catch(error => console.error(error));
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

// Replace this with your actual API function to fetch reviews data
async function fetchReviewsData(movieId) {
  try {
    const response = await fetch(
      `https://api.example.com/movies/${movieId}/reviews`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('Error fetching reviews data: ' + error.message);
  }
}

/*import React from 'react';

function Reviews() {
  // Здесь можно получить данные об обзорах из API или другого источника
  const reviewsData = [
    { id: 1, author: 'Author 1', content: 'Review Content 1' },
    { id: 2, author: 'Author 2', content: 'Review Content 2' },
    // ... другие обзоры
  ];

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviewsData.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;*/



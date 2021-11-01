import React, { useState } from 'react';

import testData from './testData.jsx';
import Review from './Review.jsx';


const ReviewList = () => {

  const [reviews, setReviews] = useState(testData.results);


  return (
    <div className = 'reviews-container'>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review, index) => {
          return (<Review review = {review} key = {`Review-${index}`}/>)
        })}
      </ul>
      <div className = 'review-button-container'>
        <button className = 'review-button'>More Reviews</button>
        <button className = 'review-button'>Add Review  +</button>
      </div>
    </div>
  );
};

export default ReviewList;
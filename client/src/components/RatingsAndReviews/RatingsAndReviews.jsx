import React from 'react';
import ReviewList from './ReviewList.jsx';

const RatingsAndReviews = () => {
  return (
    <div  className = 'ratings-reviews-container' data-testid = {'Ratings-And-Reviews'}>
      RATINGS AND REVIEWS
      <ReviewList/>
    </div>
  );
};

export default RatingsAndReviews;
import React from 'react';
import ReviewList from './Reviews/ReviewList.jsx';
import RatingsData from './RatingsData/RatingsData.jsx';


const RatingsAndReviews = () => {
  return (
    <div
    id =  'ratings-reviews-container'
    className = 'ratings-reviews-container'
    data-testid = 'Ratings-And-Reviews'>


      <RatingsData/>
      <ReviewList/>
    </div>
  );
};

export default RatingsAndReviews;
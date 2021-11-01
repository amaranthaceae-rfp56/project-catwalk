import React, { useState, useEffect, useContext } from 'react';
import ReviewContext from '../../../context/reviews/ReviewContext';

import './product-star-rating.styles.scss';

const ProductStarRating = () => {
  const reviewContext = useContext(ReviewContext);
  const { reviewMeta: { avgRatings, avgReviewCount } } = reviewContext

  return (
    <div className="product-star-ratings-container">
      <h6>Ratings: {avgRatings}</h6>
      <h6>Reviews: {avgReviewCount}</h6>
    </div>
  )
};

export default ProductStarRating
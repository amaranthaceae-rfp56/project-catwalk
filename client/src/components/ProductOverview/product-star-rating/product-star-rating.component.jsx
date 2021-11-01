import React, { useState, useEffect, useContext } from 'react';
import ReviewContext from '../../../context/reviews/ReviewContext';

import './product-star-rating.styles.scss';

const ProductStarRating = () => {
  const reviewContext = useContext(ReviewContext);
  const { reviewMeta: { avgRatings, avgReviewCount } } = reviewContext

  return (
    <div className="product-star-ratings-container">
      <h3>Ratings: {avgRatings} Stars</h3>
      <h5>Read all {avgReviewCount} reviews</h5>
    </div>
  )
};

export default ProductStarRating
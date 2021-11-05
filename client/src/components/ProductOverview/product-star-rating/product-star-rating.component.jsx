import React, { useState, useEffect, useContext } from 'react';
import ReviewContext from '../../../context/reviews/ReviewContext';

import StarRating from '../../sharedComponents/StarRating.jsx';

import './product-star-rating.styles.scss';

const ProductStarRating = () => {
  const reviewContext = useContext(ReviewContext);
  const { reviewMeta: { avgRatings, avgReviewCount } } = reviewContext

  return (
    <div className="product-star-ratings-container">
      <StarRating rating={Number(avgRatings)}/>
      <h5>Read all {avgReviewCount} reviews</h5>
    </div>
  )
};

export default ProductStarRating
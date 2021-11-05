import React, { useState, useEffect, useContext } from 'react';
import ReviewContext from '../../../context/reviews/ReviewContext';

import StarRating from '../../sharedComponents/StarRating.jsx';

import './product-star-rating.styles.scss';

const ProductStarRating = () => {
  const reviewContext = useContext(ReviewContext);
  const { reviewMeta: { avgRatings, avgReviewCount } } = reviewContext

  return (
    <div className="product-star-ratings-container">
      <StarRating rating={Number(avgRatings)} style={{ transform: 'scale(0.8)'}}/>
      <a href="#ratings-reviews-container">
        <h6 style={{ marginLeft: '5px'}}> Read all {avgReviewCount} reviews</h6>
      </a>
    </div>
  )
};

export default ProductStarRating
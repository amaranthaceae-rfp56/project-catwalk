import React from 'react';

const StarRating = (props) => {
  //requires props.rating as an integer
  const roundedRating = (Math.round(props.rating * 4) / 4).toFixed(2);
  return (
    <div className = 'star-rating'>
        <div class="Stars" style = {{'--rating': roundedRating}} aria-label="Rating of this product is 2.3 out of 5."></div>

    </div>
  );
};

export default StarRating;
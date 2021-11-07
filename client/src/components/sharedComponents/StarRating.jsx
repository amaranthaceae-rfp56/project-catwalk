import React from 'react';

const StarRating = (props) => {
  //requires props.rating as an integer
  // const roundedRating = (Math.round(props.rating * 4) / 4).toFixed(2);
  const roundedRating = 3.5;


  return (
    <div className='star-rating'>
      <div className="Stars" style={{ '--rating': roundedRating }}></div>
    </div>
  );
};

export default StarRating;
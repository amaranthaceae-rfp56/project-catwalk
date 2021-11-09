import React from 'react';

const StarRating = (props) => {
  //requires props.rating as an integer
  let roundedRating = Number((Math.round(props.rating * 4) / 4).toFixed(2));

  if (roundedRating % 1 === .25) {
    roundedRating = roundedRating + .1;

  } else if (roundedRating % 1 === .75) {
    roundedRating = roundedRating - .1;

  }

  return (
    <div className='star-rating'>
      <div className="Stars" style={{ '--rating': roundedRating }}></div>
    </div>
  );
};

export default StarRating;
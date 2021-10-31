import React from 'react';
import testData from './testData.jsx';
import Review from './Review.jsx';
const ReviewList = () => {

  console.log(testData);
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {testData.results.map((review, index) => {
          return (<Review review = {review} key = {`Review-${index}`}/>)
        })}
      </ul>
      <div>
        <button>More Reviews</button>
        <button>Add Review  +</button>
      </div>
    </div>
  );
};

export default ReviewList;
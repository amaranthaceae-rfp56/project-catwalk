import React, { useState, useContext, useEffect } from 'react';
import ReviewContext from '../../../context/reviews/ReviewContext';
import Review from './Review.jsx';


const ReviewList = () => {
  const reviewContext = useContext(ReviewContext);
  const data = reviewContext.reviews.results;
  const [reviews, setReviews] = useState([]);
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(2);

  let moreReviews;



  const clickMore = () => {
    if (visibleReviewsCount + 2 <= reviews.length) {
      setVisibleReviewsCount(visibleReviewsCount + 2);


    } else if (visibleReviewsCount + 1 <= reviews.length) {
      setVisibleReviewsCount(visibleReviewsCount + 1);

    }
  };


  if (visibleReviewsCount === reviews.length) {
    moreReviews = null;
  } else {
    moreReviews = (<button className = 'review-button' onClick = {clickMore} >More Reviews</button>);
  }
  useEffect(() => {
    if (data){
      setReviews(data);
    }

  }, [data]);
  return (
    <div className = 'reviews-container'>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review, index) => {
          if (index < visibleReviewsCount) {
            return (<Review review = {review} key = {`Review-${index}`}/>)
          }
        })}
      </ul>
      <div className = 'review-button-container'>
        {moreReviews}
        <button className = 'review-button'>Add Review  +</button>
      </div>
    </div>
  );
};

export default ReviewList;
import React from 'react';

const Review = (props) => {
  const {
    body,
    date,
    helpfulness,
    photos,
    rating,
    recommend,
    response,
    review_id,
    reviewer_name,
    summary } = props.review;

  let recommended, responseMessage;

  const setResponse = () => {
    if (response) {
      responseMessage = (
        <div className = 'review-response'>
          {response}
        </div>
      );
    } else {
      responseMessage = null;
    }
  };

  const setRecommended = () => {
      if (recommend) {
        recommended = (
          <div className = {'review-recomended-product'}>
          I recommend this product!
      </div>
        );
      }
  };


  setResponse();
  setRecommended();
  return (
    <li className = 'review'>

        <div className = {'review-rating-and-date'}>
          <div>
          STARS = {rating}
          </div>
          <div>
            {reviewer_name}, DATE
          </div>
        </div>
        <h3>{summary}</h3>
        <div className = {'review-body'}>
          <p>{body}</p>
        </div>
        {recommended}
        {responseMessage}
        <div className = {'review-helpful-vote'}>
          Was this review helpful? <div className = {'review-helpful-vote-option'}>Yes</div><div className = {'review-helpful-vote-option'}>No</div>
        </div>

    </li>
  );
};

export default Review;
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
        <div>
          <p>{response}</p>
        </div>
      );
    } else {
      responseMessage = null;
    }
  };

  const recomended = () => {
      if (recommend) {
        recommended = (
          <div className = {'review-recomended-product'}>
          I recommend this product!
      </div>
        );
      }
  };
  setResponse();
  recomended();


  return (
    <li>
      <div>
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
          Was this review helpful? <div className = {'review-helpful-vote-yes'}>Yes</div><div className = {'review-helpful-vote-no'}>No</div>
        </div>
      </div>
    </li>
  );
};

export default Review;
import React from 'react';
import Voter from '../../RelatedItems/Voter.jsx';

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

  let formattedDate = new Date(date).toLocaleDateString(undefined,{month: 'long', day: 'numeric', year: 'numeric'});


    if (response) {
      responseMessage = (
        <div className = 'review-response'>
          {response}
        </div>
      );
    } else {
      responseMessage = null;
    }



    if (recommend) {
      recommended = (
        <div className = {'review-recomended-product'}>
        I recommend this product!
    </div>
      );
    }





  return (
    <li className = 'review'>

        <div className = {'review-rating-and-date'}>
          <div>
          STARS = {rating}
          </div>
          <div>
            {reviewer_name}, {formattedDate}
          </div>
        </div>
        <h3>{summary}</h3>
        <div className = {'review-body'}>
          <p>{body}</p>
        </div>
        {recommended}
        {responseMessage}

        <Voter
        question = 'Was this review helpful?'
        helpfulness = {helpfulness}
        yes = {() => {console.log(review_id)}}
        report = {() => {console.log('ADD HTTP REQUEST')}}
        />

    </li>
  );
};

export default Review;
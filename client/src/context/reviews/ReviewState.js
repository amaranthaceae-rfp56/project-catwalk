import React, { useReducer, useEffect } from 'react';
import Axios from 'axios';
import ReviewReducer from './ReviewReducer';
import ReviewContext from './ReviewContext';

const API_URL = '/api/reviews';

import {
  GET_REVIEWS,
  GET_REVIEW_METADATA,
  POST_REVIEW,
  MARK_REVIEW,
  REPORT_REVIEW
} from '../types';

const ReviewState = props => {
  const initialState = {
    reviews: [],
    reviewMeta: {}
  }

  useEffect(() => {
    getReviews();
    getReviewMetadata();
  }, []);

  const getReviews = async () => {
    const res = await Axios.get(`${API_URL}/40344`);

    dispatch({
      type: GET_REVIEWS,
      payload: res.data
    })
  }

  const getReviewMetadata = async ()  => {
    const res = await Axios.get(`${API_URL}/meta/40344`);

    const averageRatings = getAverage(res.data.ratings)[0];
    const averageReviewCount = getAverage(res.data.ratings)[1];

    res.data['avgRatings'] = averageRatings;
    res.data['avgReviewCount'] = averageReviewCount;

    function getAverage(ratingsObj) {
      var finalAverage = 0;
      var count = 0;
      for (var keys in ratingsObj ) {
        var average = keys * ratingsObj[keys];
        count += Number(ratingsObj[keys])
        finalAverage += average
      }
      return [ Math.floor(finalAverage/count), count ]
    }

    dispatch({
      type: GET_REVIEW_METADATA,
      payload: res.data
    })
  }

  const [state, dispatch] = useReducer(ReviewReducer, initialState);

  return (
    <ReviewContext.Provider value={{ reviews: state.reviews, reviewMeta: state.reviewMeta, getReviews, getReviewMetadata }}>
      {props.children}
    </ReviewContext.Provider>
  )
}

export default ReviewState;
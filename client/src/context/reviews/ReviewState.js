import React, { useReducer, useEffect } from 'react';
import Axios from 'axios';
import ReviewReducer from './ReviewReducer';
import ReviewContext from './ReviewContext';

const API_URL = 'http://localhost:3000/api/reviews';

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
  }, []);

  const getReviews = async () => {
    const res = await Axios.get(`${API_URL}/40344`);

    dispatch({
      type: 'GET_REVIEWS',
      payload: res.data
    })
  }

  const [state, dispatch] = useReducer(ReviewReducer, initialState);

  return (
    <ReviewContext.Provider value={{ reviews: state.reviews, reviewMeta: state.reviewMeta, getReviews }}>
      {props.children}
    </ReviewContext.Provider>
  )
}

export default ReviewState;
import React, { useReducer } from 'react';
import Axios from 'axios';
import ReviewReducer from './reviewReducer';
import ReviewContext from './reviewContext';

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

  const getReviews = () => {
    const res = Axios.get(`${API_URL}/40344`);

    dispatch({
      type: 'GET_REVIEWS',
      payload: res.data
    })
  }

  const [state, dispatch] = useReducer(ReviewReducer, initialState);

  return (
    <ReviewContext.Provider values={{ reviews: state.reviews, reviewMeta: state.reviewMeta, getReviews }}>
      {props.children}
    </ReviewContext.Provider>
  )
}

export default ReviewState;
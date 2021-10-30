import {
  GET_REVIEWS,
  GET_REVIEW_METADATA,
  POST_REVIEW,
  MARK_REVIEW,
  REPORT_REVIEW
} from '../types';

export default (state, action) => {
  switch(action.type) {
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      }
    default:
      return {
        ...state
      }
  }
}
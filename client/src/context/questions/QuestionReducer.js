import {
  GET_QUESTIONS,
  GET_ANSWERS,
  ADD_QUESTION,
  ADD_ANSWER,
  MARK_QUESTION,
  REPORT_QUESTION,
  MARK_ANSWER,
  REPORT_ANSWER
} from '../types'

export default (state, action) => {
  switch(action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload
      }
    default:
      return {
        ...state
      }
  }
}
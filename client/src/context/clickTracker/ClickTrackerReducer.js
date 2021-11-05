import {
  ADD_CLICKED_DATA
} from '../types';

export default (state, action) => {
  switch(action.type) {
    case ADD_CLICKED_DATA:
      return {
        ...state,
        trackedClicks: [...state.trackedClicks, action.payload]
      }
    default:
      return state
  }
}
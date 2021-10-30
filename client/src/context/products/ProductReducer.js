import {
  GET_PRODUCTS,
  GET_PRODUCT_INFO,
  GET_PRODUCT_STYLES,
  GET_RELATED_PRODUCTS,
  SET_LOADING
} from '../types';

export default (state, action) => {
  switch(action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
     }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}
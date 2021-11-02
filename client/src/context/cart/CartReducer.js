import {
  GET_CART_ITEMS,
  ADD_CART_ITEM
} from '../types'

export default (action, state) => {
  switch(action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
        cart: action.payload
      }
    default:
      return {
        ...state
      }
  }
}
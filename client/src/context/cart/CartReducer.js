import {
  GET_CART_ITEMS,
  ADD_CART_ITEM
} from '../types'

export default (state, action) => {
  switch(action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
        cart: action.payload
      }
    case ADD_CART_ITEM:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    default:
      return state
  }
}
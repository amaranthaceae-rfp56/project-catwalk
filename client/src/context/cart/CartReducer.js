import {
  GET_CART_ITEMS,
  ADD_CART_ITEM,
  ADD_CART_ITEM_DETAILS
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
    case ADD_CART_ITEM_DETAILS:
        return {
          ...state,
          cartDetails: [...state.cartDetails, action.payload]
        }
    default:
      return state
  }
}
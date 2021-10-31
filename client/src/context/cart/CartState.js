import React, { useReducer } from 'react'
import CartContext from './CartContext';
import CartReducer from './CartReducer';

import {
  GET_CART_ITEMS,
  ADD_CART_ITEM
} from '../types'

const CartState = props => {
  const initialState = {
    cart: []
  }

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const getCartItems = () => {

  }

  const addCartItem = () => {

  }

  return (
    <CartContext.Provider value={{ cart: state.cart, getCartItems, addCartItem }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState;
import React, { useReducer } from 'react'
import Axios from 'axios';
import CartContext from './CartContext';
import CartReducer from './CartReducer';


import {
  GET_CART_ITEMS,
  ADD_CART_ITEM
} from '../types'

const API_URL = 'http://localhost:3000/api/cart';

const CartState = props => {
  const initialState = {
    cart: []
  }

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const getCartItems = () => {
    const res = Axios.get(API_URL);

    dispatch({
      type: GET_CART_ITEMS,
      payload: res.data
    })
  }

  const addCartItem = (sku, quantity) => {
    console.log(sku, quantity);

    const res = Axios.post(API_URL, {
      sku: sku,
      count: quantity
    });

    dispatch({
      type: ADD_CART_ITEM
    })
  }

  return (
    <CartContext.Provider value={{ cart: state.cart, getCartItems, addCartItem }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState;
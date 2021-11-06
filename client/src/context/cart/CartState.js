import React, { useReducer, useEffect } from 'react'
import Axios from 'axios';
import CartContext from './CartContext';
import CartReducer from './CartReducer';


import {
  GET_CART_ITEMS,
  ADD_CART_ITEM,
  ADD_CART_ITEM_DETAILS
} from '../types'

const API_URL = 'http://localhost:3000/api/cart';

const CartState = props => {
  const initialState = {
    cart: [],
    cartDetails: []
  }

  const [state, dispatch] = useReducer(CartReducer, initialState);

  // useEffect(() => {
  //   getCartItems();
  // }, []);

  const getCartItems = () => {
    const res = Axios.get(API_URL);

    dispatch({
      type: GET_CART_ITEMS,
      payload: res.data
    })
  }

  const addCartItem = (sku, quantity) => {
    const cartInfo = {
      sku: sku,
      count: quantity
    }

    const itemExists = state.cart.filter((item) => item.sku === sku);

    if (itemExists.length > 0) {
      return
    }
    const res = Axios.post(API_URL, cartInfo);

    dispatch({
      type: ADD_CART_ITEM,
      payload: cartInfo
    })
  }

  const addCartItemDetails = (name, img, price, quantity, sku) => {
    const data = {
      name,
      img_url: img,
      price,
      quantity
    }

    const itemExists = state.cartDetails.filter((item) => item.sku === sku);

    if (itemExists.length > 0) {
      return
    }

    dispatch({
      type: ADD_CART_ITEM_DETAILS,
      payload: data
    })
  }

  return (
    <CartContext.Provider value={{ cart: state.cart, cartDetails: state.cartDetails, getCartItems, addCartItem, addCartItemDetails }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState;
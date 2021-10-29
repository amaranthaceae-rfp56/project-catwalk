import React, { useReducer, useEffect } from 'react';
import Axios from 'axios';
import ProductContext from './ProductContext.js';
import ProductReducer from './ProductReducer.js';

import {
  GET_PRODUCTS,
  GET_PRODUCT_INFO,
  GET_PRODUCT_STYLES,
  GET_RELATED_PRODUCTS,
  SET_LOADING
} from '../types';

const API_URL = 'http://localhost:3000/api/products';

const ProductState = props => {
  const initialState = {
    products: [],
    productStyles: [],
    productInfo: {},
    relatedProducts: [],
    loading: false
  }

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  // GET PRODUCTS
  useEffect(() => {
    getProducts()
    console.log(initialState);
  }, [])

  const getProducts = async () => {
    const res = await Axios.get(`${API_URL}`);
    console.log(res);


    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    })
  }

  // SET LOADING
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
  <ProductContext.Provider
    value={{ products: state.products,
    productStyles: state.productStyles,
    productInfo: state.productInfo,
    relatedProducts: state.relatedProducts,
    loading: state.loading,
    getProducts
    }}
    >
      {props.children}
    </ProductContext.Provider>
    )
}

export default ProductState;
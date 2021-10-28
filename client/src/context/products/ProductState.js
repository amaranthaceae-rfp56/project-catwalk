import React, { useReducer } from 'react';
import Axios from 'axios';
import ProductContext from './productContext.js';
import ProductReducer from './productReducer.js';

import {
  GET_PRODUCTS,
  GET_PRODUCT_INFO,
  GET_PRODUCT_STYLES,
  GET_RELATED_PRODUCTS
} from '../types';

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


  return (<ProductContext.Provider
    value={{ products: state.products,
    productStyles: state.productStyles,
    productInfo: state.productInfo,
    relatedProducts: state.relatedProducts,
    loading: state.loading
    }}
    >
      {props.children}
    </ProductContext.Provider>)
}

export default ProductState;
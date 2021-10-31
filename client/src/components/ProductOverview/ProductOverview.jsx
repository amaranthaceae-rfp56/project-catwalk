import React, { useContext } from 'react';
import ProductContext from '../../context/products/ProductContext';

const ProductOverview = () => {
  const productContext = useContext(ProductContext);
  const { productInfo: { name, slogan, description, category, default_price, features } } = productContext;
  return (
    <div data-testid = {'Product-Overview'}>
      <h4>Category: {category}</h4>
      <h4>name: {name}</h4>
      <h4>Price: {default_price}</h4>
    </div>
  );
};

export default ProductOverview;
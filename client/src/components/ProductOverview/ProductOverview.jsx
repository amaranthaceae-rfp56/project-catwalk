import React, { useContext } from 'react';
import ProductContext from '../../context/products/ProductContext';

const ProductOverview = () => {
  const productContext = useContext(ProductContext);

  return (
    <div data-testid = {'Product-Overview'}>
      PRODUCT OVERVIEW
    </div>
  );
};

export default ProductOverview;
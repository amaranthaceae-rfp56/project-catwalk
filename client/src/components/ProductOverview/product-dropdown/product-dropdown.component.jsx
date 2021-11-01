import React, { useContext } from 'react';
import ProductContext from '../../../context/products/ProductContext';

import './product-dropdown.styles.scss';

const ProductDropdown = () => {
  const productContext = useContext(ProductContext);
  const { currentStyle } = productContext;

  return (
    <div>
      <select>
        <option value="" selected disabled hidden>Select Size</option>
        {currentStyle.skus && Object.values(currentStyle.skus).map((sku) => (
          <option>{sku.size}</option>
        ))}
        {/* <option>test</option> */}
      </select>
    </div>
  )
}

export default ProductDropdown;
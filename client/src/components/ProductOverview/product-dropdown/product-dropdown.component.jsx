import React, { useState, useContext } from 'react';
import ProductContext from '../../../context/products/ProductContext';

import './product-dropdown.styles.scss';

const ProductDropdown = () => {
  const productContext = useContext(ProductContext);
  const { currentStyle } = productContext;
  const [quantitySize, setQuantitySize] = useState(null);
  const [quantity, setQuantity] = useState(null);

  const handleChange = (e) => {
    console.log(e.target.value)
    setQuantitySize(Number(e.target.value));
  }

  const handleQuantityChange = (e) => {
    console.log(e.target.value);
    setQuantity(e.target.value);
  }

  return (
    <div>
      <select onChange={handleChange} value={quantitySize}>
        <option value="" selected disabled hidden>Select Size</option>
        {currentStyle.skus && Object.values(currentStyle.skus).map((sku) => (
          <option value={sku.quantity}>{sku.size}</option>
        ))}
      </select>

      <select onChange={handleQuantityChange} value={quantity}>
      {/* <option value="" selected disabled hidden> - </option> */}
         {[...Array(quantitySize)].map((num, i) => (
          <option value={i + 1}>{i + 1}</option>
        ))}
      </select>
      {/* <select>
        <option value="" selected disabled hidden>Select Size</option>
        {currentStyle.skus && Object.values(currentStyle.skus).map((sku) => (
          <option>{sku.quantity}</option>
        ))}
      </select> */}
    </div>
  )
}

export default ProductDropdown;
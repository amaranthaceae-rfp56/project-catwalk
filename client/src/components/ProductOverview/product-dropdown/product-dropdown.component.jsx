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
    <div className="product-dropdown-container">
      <select onChange={handleChange} value={quantitySize} className="product-dropdown">
        <option value="" className="product-dropdown-option" selected disabled hidden >Select Size</option>
        {currentStyle.skus && Object.values(currentStyle.skus).map((sku) => (
          <option value={sku.quantity}>{sku.size}</option>
        ))}
      </select>

      <select onChange={handleQuantityChange} value={quantity} className="product-dropdown">
      {/* <option value="" selected disabled hidden> - </option> */}
         {[...Array(quantitySize)].map((num, i) => {
           if (i + 1 > 15) {
             return
           } else {
             return (<option value={i + 1}>{i + 1}</option>);
           }
         })}
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
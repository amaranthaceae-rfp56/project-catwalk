import React, { useState, useContext } from 'react';
import ProductContext from '../../../context/products/ProductContext';
import CartContext from '../../../context/cart/CartContext'

import './product-dropdown.styles.scss';

const ProductDropdown = () => {
  const productContext = useContext(ProductContext);
  const cartContext = useContext(CartContext);

  const { currentStyle } = productContext;
  const [quantitySize, setQuantitySize] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [sku, setSku] = useState(null);

  const handleChange = (e) => {
    const skuVal = e.target[e.target.selectedIndex].dataset.id;
    setQuantitySize(Number(e.target.value));
    setSku(skuVal);
  }

  const handleQuantityChange = async (e) => {
    setQuantity(Number(e.target.value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!quantitySize) {
      console.log('testing')
    }
    cartContext.addCartItem(sku, quantity);
  }

  return (
    <div className="product-dropdown-container">
      <select onChange={handleChange} value={quantitySize} className="product-dropdown">
        <option value="" className="product-dropdown-option" selected disabled hidden >SELECT SIZE</option>
        {currentStyle.skus && Object.entries(currentStyle.skus).map((sku, i) => (
          <option data-id={sku[0]} value={sku[1].quantity}>{sku[1].size}</option>
        ))}
      </select>

      <select onChange={handleQuantityChange} value={quantity} className="product-dropdown">
      {/* <option value="" selected disabled hidden> - </option> */}
         {quantitySize === 0 ? <option>OUT OF STOCK</option> : [...Array(quantitySize)].map((num, i) => {
           if (i + 1 > 15) {
             return
           } else {
             return (<option value={i + 1}>{i + 1}</option>);
           }
         })}
      </select>

      <form onSubmit={handleSubmit}>
        <button className="product-dropdown" type="submit">Add To Cart</button>
      </form>

    </div>
  )
}

export default ProductDropdown;
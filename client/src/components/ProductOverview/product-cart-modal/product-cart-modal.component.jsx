import React, { useContext, useState, useEffect } from 'react';
import CartContext from '../../../context/cart/CartContext.js';
import './product-cart-modal.styles.scss'

const ProductCartModal = ({ showModal }) => {
  const { cartDetails } = useContext(CartContext);

  // useEffect(() => {

  // }, [cartDetails])

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Cart</h4>
        </div>

        <div className="modal-body">
          { !cartDetails ? <p>Loading...</p> : cartDetails.map(({ name, img_url, price, quantity}) => (
            <div className="modal-body-container">
              <img src={img_url} style={{ height: '80px', width: '80px'}}></img>
              <h4>{name}</h4>
              <h5>{price}</h5>
              <h6>{quantity}</h6>
            </div>
          ))}
        </div>

        <div className="modal-footer">
          <button className="modal-button" onClick={showModal}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCartModal
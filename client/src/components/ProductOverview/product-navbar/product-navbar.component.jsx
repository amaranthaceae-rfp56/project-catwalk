import React, { useState, useContext, useEffect } from 'react';
import CartIcon from '../../../../assets/cart.svg';
import './product-navbar.styles.scss';

import CartContext from '../../../context/cart/CartContext';
import navbarIcon from '../../../../assets/navbar-icon.svg';
import ProductCartModal from '../product-cart-modal/product-cart-modal.component.jsx';

const ProductNavbar = () => {
  const { cart } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(cart.length)
  }, [cart])

  const showModal = () => {
    setShow(!show)
  }

  return (
    <nav className="product-navbar">
      <div className="product-navbar-left">
        <span>
            <span style={{ color: 'white' }}>&lt;/ Amaranthaceae &gt;</span>
          </span>
      </div>

      <div className="product-navbar-right">

          <a href="#related-card-container" style={{ textDecoration: 'none', color: 'white'}}>Related</a>
          <a href="#questions-main-container" style={{ textDecoration: 'none', color: 'white'}}>Questions</a>
          <a href="#ratings-reviews-container" style={{ textDecoration: 'none', color: 'white'}}>Reviews</a>

          <div className="cart-container">
            <p className="cart-count">{count}</p>
            <img src={CartIcon} style={{ height: '55px', width: '55px' }} onClick={showModal} className="cart-svg"/>
            {!show ? null : <ProductCartModal showModal={showModal}/>}
          </div>
      </div>

    </nav>
  )
}

export default ProductNavbar
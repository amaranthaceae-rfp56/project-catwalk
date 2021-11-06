import React, { useState } from 'react';
import CartIcon from '../../../../assets/cart.svg';
import './product-navbar.styles.scss';

import navbarIcon from '../../../../assets/navbar-icon.svg';
import ProductCartModal from '../product-cart-modal/product-cart-modal.component.jsx';

const ProductNavbar = () => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(!show)
  }

  return (
    <nav className="product-navbar">
      <div className="product-navbar-left">
        {/* <img src={navbarIcon} style={{ height: '50px', width: '50px'}}/> */}
        <span>
            <span style={{ color: 'white' }}>&lt;/ Amaranthaceae &gt;</span>
          </span>
      </div>

      <div className="product-navbar-right">

          <a href="#related-card-container" style={{ textDecoration: 'none', color: 'white'}}>Related</a>
          <a href="#questions-section-container" style={{ textDecoration: 'none', color: 'white'}}>Questions</a>
          <a href="#ratings-reviews-container" style={{ textDecoration: 'none', color: 'white'}}>Reviews</a>

          <img src={CartIcon} style={{ height: '40px', width: '40px' }} onClick={showModal} />
          {!show ? null : <ProductCartModal />}
      </div>

    </nav>
  )
}

export default ProductNavbar
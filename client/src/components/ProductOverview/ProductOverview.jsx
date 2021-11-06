import React, { useState, useContext } from 'react';
import ProductContext from '../../context/products/ProductContext';
import '../../styles/sections/_products.scss';

import ProductStarRating from './product-star-rating/product-star-rating.component.jsx';
import ProductImageGallery from './product-image-gallery/product-image-gallery.component.jsx';
import ProductStyleSelector from './product-style-selector/product-style-selector.component.jsx'
import ProductDropdown from './product-dropdown/product-dropdown.component.jsx';
import ProductSocialMedia from './product-social-media/product-social-media.component.jsx';
import ProductExpandedView from './product-expanded-view/product-expanded-view.component.jsx';
import ProductNavbar from './product-navbar/product-navbar.component.jsx';

import GreenCheckmark from '../../../assets/greenCheckmark.svg';
// import Banner from '../../../assets/banner.png';

import './ProductOverview.styles.scss';

const ProductOverview = () => {
  const productContext = useContext(ProductContext);
  const { productInfo, currentStyle } = productContext;
  const [expandView, setExpandView] = useState(false);

  const handleExpandView = () => {
    setExpandView(!expandView)
  }

  return (
    <div className="product-overview">
      <ProductNavbar />
      <div className="product-overview-message">
        <span>SITE-WIDE ANNOUNCEMENT MESSAGE! -- SALE /DISCOUNT <bold>OFFER</bold> -- NEW PRODUCT HIGHLIGHT</span>
      </div>
      <div className="product-overview-container">
        <div className={!expandView ? "product-overview-container-left" : "product-overview-container-left active"}>
          {!expandView ? <ProductImageGallery expandView={handleExpandView}/> : <ProductExpandedView expandView={handleExpandView}/> }
        </div>

        <div className={!expandView ? "product-overview-container-right" : "product-overview-container-right active"}>
          <ProductStarRating />
          <div className="product-overview-details">
            <h2>{productInfo.name}</h2>
            {!currentStyle.sale_price ? <h3>$ {currentStyle.original_price}</h3> : <div> <strike style={{ color: "red"}}>$ {currentStyle.original_price}</strike><h3>$ {currentStyle.sale_price}</h3></div>}
          </div>
          <h5>Select Style <span style={{ fontWeight: '10'}}>&gt; {currentStyle.name}</span></h5>
          <ProductStyleSelector />
          <ProductDropdown />
          <ProductSocialMedia />
        </div>
      </div>

      <div className="product-overview-description">
          <div className="product-overview-description-left">
            <h3>{productInfo.slogan}</h3>
            <p className="product-overview-description-left-body">{productInfo.description}</p>
          </div>
          <hr className="product-overview-description-divider" />
          <div className="product-overview-description-right">
            {productInfo.features && productInfo.features.map(({ feature, value }) => (
              <div className="product-overview-description-feature">
                  <img src={GreenCheckmark} style={{ height: '25px', width: '25px', marginRight: '10px' }}/>
                  <h5>{feature}: {value}</h5>
              </div>
            ))}
           </div>
      </div>
    </div>
  );
};

export default ProductOverview;
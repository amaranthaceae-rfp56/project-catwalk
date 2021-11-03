import React, { useState, useContext } from 'react';
import ProductContext from '../../context/products/ProductContext';
import '../../styles/sections/_products.scss';

import ProductStarRating from './product-star-rating/product-star-rating.component.jsx';
import ProductImageGallery from './product-image-gallery/product-image-gallery.component.jsx';
import ProductStyleSelector from './product-style-selector/product-style-selector.component.jsx'
import ProductDropdown from './product-dropdown/product-dropdown.component.jsx';
import ProductSocialMedia from './product-social-media/product-social-media.component.jsx';
import ProductExpandedView from './product-expanded-view/product-expanded-view.component.jsx';

import './ProductOverview.styles.scss';

const ProductOverview = () => {
  const productContext = useContext(ProductContext);
  const { productInfo, currentStyle } = productContext;
  const [expandView, setExpandView] = useState(false);

  const handleExpandView = () => {
    setExpandView(!expandView)
  }

  return (
    <div className="product-overview-container">

      <div className="product-overview-container-left">
        {!expandView ? <ProductImageGallery expandView={handleExpandView}/> : <ProductExpandedView /> }
      </div>

      <div className="product-overview-container-right">
        <ProductStarRating />
        <div className="product-overview-details">
          <h2>{currentStyle.name}</h2>
          {!currentStyle.sale_price ? <h3>$ {currentStyle.original_price}</h3> : <div> <strike style={{ color: "red"}}>$ {currentStyle.original_price}</strike><h3>$ {currentStyle.sale_price}</h3></div>}
        </div>
        <h4> Style: Selected Style</h4>
        <ProductStyleSelector />
        <ProductDropdown />
        <ProductSocialMedia />
      </div>

    </div>
  );
};

export default ProductOverview;
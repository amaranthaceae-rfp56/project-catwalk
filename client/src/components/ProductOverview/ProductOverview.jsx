import React, { useContext } from 'react';
import ProductContext from '../../context/products/ProductContext';

import ProductStarRating from './product-star-rating/product-star-rating.component.jsx';
import ProductImageGallery from './product-image-gallery/product-image-gallery.component.jsx';
import ProductStyleSelector from './product-style-selector/product-style-selector.component.jsx'

import './ProductOverview.styles.scss';

const ProductOverview = () => {
  const productContext = useContext(ProductContext);
  const { currentStyle } = productContext;

  return (
    <div className="product-overview-container">

      <div className="product-overview-container-left">
        <ProductImageGallery />
      </div>

      <div className="product-overview-container-right">
        <ProductStarRating />
        <div className="product-overview-details">
        <h4>{currentStyle && currentStyle.name}</h4>
        <h5></h5>
        </div>
        <h6> Style: Selected Style</h6>
        <ProductStyleSelector />

      </div>

    </div>
  );
};

export default ProductOverview;
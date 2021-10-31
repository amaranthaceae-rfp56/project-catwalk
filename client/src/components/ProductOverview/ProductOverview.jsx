import React, { useContext } from 'react';
import ProductContext from '../../context/products/ProductContext';

import ProductStarRating from './product-star-rating/product-star-rating.component.jsx';
import ProductImageGallery from './product-image-gallery/product-image-gallery.component.jsx';

import './ProductOverview.styles.scss';

const ProductOverview = () => {
  const productContext = useContext(ProductContext);
  const { productInfo: { name, slogan, description, category, default_price, features } } = productContext;
  return (
    <div className="product-overview-container">

      <div className="product-overview-container-left">
        <ProductImageGallery />
      </div>

      <div className="product-overview-container-right">
        <ProductStarRating />
        <h4>Category: {category}</h4>
        <h4>name: {name}</h4>
        <h4>Price: {default_price}</h4>
      </div>

    </div>
  );
};

export default ProductOverview;
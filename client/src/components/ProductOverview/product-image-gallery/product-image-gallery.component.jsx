import React, { useContext, useState, useEffect } from 'react';
import ProductContext from '../../../context/products/ProductContext';

import './product-image-gallery.styles.scss';

const ProductImageGallery = () => {
  const productContext = useContext(ProductContext);
  const [mainPhoto, setMainPhoto] = useState(null);

  // useEffect(() => {

  // }, [])

  const handleClick = (e) => {
    const currentIndex = Number(e.target.name);
    const selectedPhoto = productContext.currentStyle.photos[currentIndex];
    setMainPhoto(selectedPhoto);
  }

    return (
      <div className="product-image-gallery-container">

        <div className="product-image-gallery-thumbnail-container">
          {productContext.currentStyle.photos && productContext.currentStyle.photos.map((photo, index) => (
            <div>
              <img src={photo.thumbnail_url} className="image-gallery-thumbnail" onClick={handleClick} name={index}/>
            </div>
          ))}
        </div>

        <div className="product-image-gallery-main">
            {!mainPhoto ? productContext.currentStyle.photos && productContext.currentStyle.photos.map((photo, i) => {
              if (i === 0) {
                return (
                  <img className="image-gallery-main" src={photo.url} />
                )
              }
            }) : <img className="image-gallery-main" src={mainPhoto.url} /> }
        </div>

      </div>
    );
}

export default ProductImageGallery
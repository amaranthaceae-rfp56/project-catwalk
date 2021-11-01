import React, { useContext, useState } from 'react';
import ProductContext from '../../../context/products/ProductContext';

import './product-image-gallery.styles.scss';

const ProductImageGallery = () => {
  const { currentStyle } = useContext(ProductContext);
  const [mainPhoto, setMainPhoto] = useState({});

  const handleClick = (e) => {
    console.log(e.target.name);
    const currentIndex = Number(e.target.name);

    const selectedPhoto = currentStyle.photos[currentIndex];
    setMainPhoto(selectedPhoto);
  }

  return (
    <div className="product-image-gallery-container">

      <div className="product-image-gallery-thumbnail-container">
        {currentStyle.photos && currentStyle.photos.map((photo, index) => (
          <div>
            <img src={photo.thumbnail_url} className="image-gallery-thumbnail" onClick={handleClick} name={index}/>
          </div>
        ))}
      </div>

      <div className="product-image-gallery-main">
          {!mainPhoto && currentStyles.photos ? <img src={currentStyle.photos[0].url} /> : <img src={mainPhoto.url} />}
      </div>

      <p>{currentStyle.name}</p>
    </div>
  )
}

export default ProductImageGallery
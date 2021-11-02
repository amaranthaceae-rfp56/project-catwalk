import React, { useContext, useState, useEffect } from 'react';
import ProductContext from '../../../context/products/ProductContext';

import leftArrow from '../../../../assets/backArrow.svg';
import rightArrow from '../../../../assets/forwardArrow.svg';

import './product-image-gallery.styles.scss';

const ProductImageGallery = () => {
  const productContext = useContext(ProductContext);
  const { currentStyle } = productContext;
  const [mainPhoto, setMainPhoto] = useState(null);
  const [page, setPage] = useState(0);
  const [length, setLength] = useState(0);

  useEffect(() => {
    if(currentStyle.photos) {
      setMainPhoto(currentStyle.photos[0])
      setLength(currentStyle.photos.length - 1);
    }
  }, [currentStyle.photos])

  const handleClick = (e) => {
    const currentIndex = Number(e.target.name);
    const selectedPhoto = currentStyle.photos[currentIndex];
    setMainPhoto(selectedPhoto);
  }

  const handlePageChange = (e) => {
    console.log('testing')
    if (e.target.name === "back") {
      console.log('back')
      if (page === 0) {
        setPage(length);
      } else {
        setPage(page - 1)
      }
    } else {
      if (page === length) {
        setPage(0)
      } else {
        setPage(page + 1)
      }
    }
  }

    return (
      <div className="product-image-gallery-container">

        <div className="product-image-gallery-thumbnail-container">
          {currentStyle.photos && currentStyle.photos.map((photo, index, key) => (
            <div key={index}>
              <img src={photo.thumbnail_url} className="image-gallery-thumbnail" onClick={handleClick} name={index} />
            </div>
          ))}
        </div>

        <div className="product-image-gallery-main">
            <img src={leftArrow} className="left-arrow" onClick={handlePageChange} name="back" value={page}/>
            {mainPhoto && <img className="image-gallery-main" src={mainPhoto.url} />}
            <img src={rightArrow} className="right-arrow" onClick={handlePageChange} name="front" value={page}/>
        </div>

      </div>
    );
}

export default ProductImageGallery
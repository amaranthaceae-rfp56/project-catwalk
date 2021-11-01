import React, { useContext } from 'react';
import ProductContext from '../../../context/products/ProductContext';

import './product-style-selector.styles.scss';

const ProductStyleSelector = () => {
  const { productStyles : { results }, getCurrentStyle } = useContext(ProductContext);
  // const { results } = productContext.productStyles
  // console.log(results);

  const handleClick = (e) => {
    getCurrentStyle(e.target.name);
  }

  return (
    <div className="product-style-container">
      {results && results.map((style) => (
        <img className="product-style-icon" src={style.photos[0].thumbnail_url} name={style.style_id} onClick={handleClick}/>
      ))}
    </div>
  )
}

export default ProductStyleSelector
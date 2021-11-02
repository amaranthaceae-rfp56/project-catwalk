import React, { useState, useContext } from 'react';
import ProductContext from '../../../context/products/ProductContext';

import CheckMark from '../../../../assets/checkmark.svg';

import './product-style-selector.styles.scss';

const ProductStyleSelector = () => {
  const { productStyles : { results }, getCurrentStyle } = useContext(ProductContext);
  const [selected, setSelected] = useState({});
  // const { results } = productContext.productStyles
  // console.log(results);

  const handleClick = (e) => {
    getCurrentStyle(e.target.name);
    setSelected({ id: e.target.name });
  }

  return (
    <div className="product-style-container">
      {results && results.map((style) => (
        <div className="product-style-icon-container">
          <img src={CheckMark} className={selected.id == style.style_id ? "checkmark active" : "checkmark"}/>
          {/* <img src={CheckMark} className={selected.id == style.style.id ? "checkmark active" : "checkmark"} onClick={handleClick}/> */}
          <img className={selected.id == style.style_id ? "product-style-icon active" : "product-style-icon"} src={style.photos[0].thumbnail_url} name={style.style_id} onClick={handleClick}/>
        </div>
      ))}
    </div>
  )
}

export default ProductStyleSelector
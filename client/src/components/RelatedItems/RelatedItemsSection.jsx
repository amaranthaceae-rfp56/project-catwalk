import React, { useState, useEffect } from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';
import '../../styles/sections/_related.scss';
import leftArrow from '../../../assets/backArrow.svg';
import rightArrow from '../../../assets/forwardArrow.svg';



const RelatedItemsSection = () => {
  const [relatedItems, setRelatedItems] = useState([]);
  const [pageProduct, setPageProduct] = useState({});

  const API_URL = 'http://localhost:3000/api/products';

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'GET',
    };
    //get page product info
    fetch(`${API_URL}/40344`, requestOptions)
      .then(response => response.json())
      .then(data => setPageProduct(data));

    // get related item id list and map out to an array of related item info list
    fetch(`${API_URL}/40344/related`, requestOptions)
      .then(response => response.json())
      .then(res => setRelatedItems(res));


    // get related item id list and map out to an array of related item info list
  }, []);

  return (
    <div className="related-card-container">
       <p>RELATED PRODUCTS</p>
       <div data-testid={'Related-Items'} className="Related-Items">
       <img src={leftArrow} />
      {relatedItems.map((product, index) => {
        return <RelatedItemCard
          pageProduct={pageProduct}
          cardProductId={product}
          key={index} />
      })}

      <img src={rightArrow} />

    </div>
    </div>

  );
};



export default RelatedItemsSection;
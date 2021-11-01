import React, { useState, useEffect } from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';



const RelatedItemsSection = () => {
  const [relatedItems, setRelatedItems] = useState([]);
  const [pageProduct, setPageProduct] = useState({});
  // const [ productId, getRelatedProductId ] = useState(40344);
  const base_url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'GET',
    };

    fetch(`${base_url}/products/40347`, requestOptions)
      .then(response => response.json())
      .then(data => setPageProduct(data));

    fetch(`${base_url}/products/40347/related`, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('...', data);
        const res = data.map(id => {
          const requestOptions = {
            method: 'GET',
          };
          return fetch(`${base_url}/products/${id}`, requestOptions)
            .then(response => response.json());
        });
        return Promise.all(res);
      })
      .then(res => setRelatedItems(res));
  }, []);

  return (
    <div data-testid={'Related-Items'}>
      <p>RELATED PRODUCTS</p>
      {relatedItems.map((product, index) => {
        return <RelatedItemCard
          pageProduct={pageProduct}
          cardProduct={product}
          key={index} />
      })}
    </div>
  );
};



export default RelatedItemsSection;
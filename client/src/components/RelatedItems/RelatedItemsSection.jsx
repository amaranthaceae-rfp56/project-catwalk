import React, { useState, useEffect, useRef, useContext } from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';
import '../../styles/sections/_related.scss';
import leftArrow from '../../../assets/backArrow.svg';
import rightArrow from '../../../assets/forwardArrow.svg';
import ProductContext from '../../context/products/ProductContext';



const RelatedItemsSection = () => {
  const [relatedItems, setRelatedItems] = useState([]);
  const [pageProduct, setPageProduct] = useState({});
  const ref = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const productContext = useContext(ProductContext);

  const API_URL = 'http://localhost:3000/api/products';

  useEffect(() => {
    const currentId = productContext.productInfo.id;
    // GET request using fetch inside useEffect React hook

    //get page product info
    fetch(`${API_URL}/${currentId}`)
      .then(response => response.json())
      .then(data => setPageProduct(data));

    // get related item id list and map out to an array of related item info list
    fetch(`${API_URL}/${currentId}/related`)
      .then(response => response.json())
      .then(res => setRelatedItems(res));


    // get related item id list and map out to an array of related item info list
  }, [productContext.productInfo.id]);


  useEffect(() => {
    var element = ref.current;
    if (element) {
      console.log('scrollWidth', element.scrollWidth);
      console.log('clientWidth', element.clientWidth);
      setShowRightArrow(element.scrollWidth > element.clientWidth);
    }
  });

  const handleLoad = () => {
    var element = ref.current;
    if (element.clientWidth) {
      element.addEventListener('scroll', () => {
        setShowLeftArrow(element.scrollLeft > 0);
        // console.log('scrollLeft', element.scrollLeft);
        // console.log('scrollWidth', element.scrollWidth);
        // console.log('clientWidth', element.clientWidth);
        setShowRightArrow(element.scrollLeft < element.scrollWidth - element.clientWidth);
      });
    }
  }

  const handleScroll = (width) => {
    ref.current.scrollLeft += width;
  }

  return (
    <div className="related-card-container" id="related-card-container">
      <div className="related-title-container">
        <p>RELATED PRODUCTS</p>
      </div>
      <div data-testid={'Related-Items'} className="Related-Items">
        <img src={leftArrow}
          onClick={() => handleScroll(-300)}
          style={{ height: '30px', width: '30px' }}
          className={showLeftArrow ? 'active' : 'non-active'}
        />
        <div className="related-card-section"
          ref={ref}
          onLoad={handleLoad}
        >
          {relatedItems.map((product, index) => {
            return <RelatedItemCard
              pageProduct={pageProduct}
              cardProductId={product}
              key={index} />
          })}
        </div>
        <img src={rightArrow}
          className={showRightArrow ? 'active' : 'non-active'}
          onClick={() => handleScroll(300)}
          style={{ height: '30px', width: '30px' }}

        />

      </div>
    </div>

  );
};



export default RelatedItemsSection;
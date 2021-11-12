import React, { useState, useEffect, useRef, useContext } from 'react';
import OutfitCard from './OutfitCard.jsx';
import rightArrow from '../../../assets/forwardArrow.svg';
import leftArrow from '../../../assets/backArrow.svg';
import '../../styles/sections/_outfit.scss';
import ProductContext from '../../context/products/ProductContext';

const OutfitSection = () => {
  const username = window.location.search.slice(10);
  const [pageProduct, setPageProduct] = useState({});
  const [outfitList, setOutfitList] = useState([]);
  const ref = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const productContext = useContext(ProductContext);
  // const currentId = productContext.productInfo.id;

  // const base_url = 'http://localhost:3000';

  useEffect(() => {
    setPageProduct(productContext.productInfo);
  }, [productContext.productInfo.id]);

  useEffect(() => {
    fetchOutfitList();
  }, [username]);


  const fetchOutfitList = () => {
    fetch(`/outfit/${username}`)
      .then(response => response.json())
      .then(data => setOutfitList(data));
  };

  const addToList = () => {
    fetch(`/outfit/${username}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pageProduct)
    })
      .then(() => fetchOutfitList())
  };


  const handleLoad = () => {
    var element = ref.current;
    if (element.clientWidth) {
      element.addEventListener('scroll', () => {
        setShowLeftArrow(element.scrollLeft > 0);
        setShowRightArrow(element.scrollLeft < element.scrollWidth - element.clientWidth);
      });
    }
  }

  const handleScroll = (width) => {
    ref.current.scrollLeft += width;
  }

  return (
    <div className="outfit-card-container">
      <div className="outfit-title-container">
        <p className="outfit-title">YOUR OUTFIT</p>
      </div>
      <div
        data-testid={'Outfit-Items'}
        className="Outfit-Items"
      >
        <div className="outfit-button">
          <button onClick={addToList}
            className="outfit-button-text"
          >Add to Outfit</button>
        </div>
        {
          (<img
            src={leftArrow}
            onClick={() => handleScroll(-300)}
            style={{ height: '30px', width: '30px' }}
            className={showLeftArrow ? 'active' : 'non-active'}
          />)
        }
        <div
          className="outfit-card-section"
          ref={ref}
          onLoad={handleLoad}
        >
          {outfitList.map(productId =>
            <OutfitCard
              key={productId}
              productId={productId}
              username={username}
              fetchOutfitList={fetchOutfitList}
            />)}
        </div>
        <img
          className={showRightArrow ? 'active' : 'non-active'}
          src={rightArrow}
          onClick={() => handleScroll(300)}
          style={{ height: '30px', width: '30px' }}
        />
      </div>
    </div>
  );
}

export default OutfitSection;
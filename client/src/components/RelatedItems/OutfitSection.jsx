import React, { useState, useEffect, useRef } from 'react';
import OutfitCard from './OutfitCard.jsx';
import rightArrow from '../../../assets/forwardArrow.svg';
import leftArrow from '../../../assets/backArrow.svg';
import '../../styles/sections/_outfit.scss';


const OutfitSection = () => {
  const username = window.location.search.slice(10);
  const [pageProduct, setPageProduct] = useState({});
  const [outfitList, setOutfitList] = useState([]);
  const ref = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const base_url = 'http://localhost:3000';

  useEffect(() => {
    fetch(`${base_url}/api/products/40344`)
      .then(response => response.json())
      .then(data => setPageProduct(data));
    fetchOutfitList();
  }, []);

  const fetchOutfitList = () => {
    fetch(`${base_url}/outfit/${username}`)
      .then(response => response.json())
      .then(data => setOutfitList(data));
  };

  const addToList = () => {
    fetch(`${base_url}/outfit/${username}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pageProduct)
    })
      .then(() => {
        fetch(`${base_url}/outfit/${username}`)
          .then(response => response.json())
          .then(data => setOutfitList(data));
      })
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
      <p className="outfit-title">YOUR OUTFIT</p>

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
        />
      </div>
    </div>
  );
}

export default OutfitSection;
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
  const [width, setWidth] = useState(0);

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
    // console.log(ref);
    if (ref.current.clientWidth) {
      setWidth(ref.current.clientWidth);
    }
  }

  const handleScroll = (width) => {
    ref.current.scrollLeft += width;
    console.log('scrollLeft>>', ref.current.scrollLeft);
  }

  return (
    <div className="outfit-card-container">
      <p>YOUR OUTFIT</p>
      <div
        data-testid={'Outfit-Items'}
        className="Outfit-Items"
      >
        <div className="outfit-button">
          <button onClick={addToList}
            className="outfit-button-text"
          >Add to Outfit</button>
        </div>
        {ref && ref.current && ref.current.scrollLeft !== 0 &&
          <img
            src={leftArrow}
            onClick={() => handleScroll(-width / 2)}
          />}
        {/* <img
          src={leftArrow}
          onClick={() => handleScroll(-300)}
        /> */}
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
          src={rightArrow}
          onClick={() => handleScroll(width / 2)}
        />
      </div>
    </div>
  );
}

export default OutfitSection;
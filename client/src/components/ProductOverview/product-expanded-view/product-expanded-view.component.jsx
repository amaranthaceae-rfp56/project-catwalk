import React, { useContext, useState, useEffect, useRef } from 'react';
import ProductContext from '../../../context/products/ProductContext';

import leftArrow from '../../../../assets/backArrow.svg';
import rightArrow from '../../../../assets/forwardArrow.svg';
import upArrow from '../../../../assets/upArrow.svg';
import downArrow from '../../../../assets/downArrow.svg';

// import ProductMagnify from '../product-magnify.component.jsx';

import './product-expanded-view.styles.scss';

const ProductExpandedView = ({ expandView }) => {
  const productContext = useContext(ProductContext);
  const { currentStyle } = productContext;
  const [page, setPage] = useState(0);
  const [height, setHeight] = useState(0);
  const [zoom, setZoom] = useState();
  const [zoomState, setZoomState] = useState(false);
  const ref = useRef(null);


  const handleClick = (e) => {
    const currentIndex = Number(e.target.name);
    setPage(currentIndex);
  }

  const handlePageChange = (e) => {
    if (e.target.name === "back") {
      if (page === 0) {
        // setPage(length);
        setPage(currentStyle.photos.length - 1)
      } else {
        setPage(page - 1)
      }
    } else {
      if (page === currentStyle.photos.length - 1) {
        setPage(0)
      } else {
        setPage(page + 1)
      }
    }
  }

  const handleLoad = () => {
    if (ref.current.clientHeight) {
      setHeight(ref.current.clientHeight)
    }
  }

  const handleScroll = (height) => {
    ref.current.scrollTop -= height
  }

  const handleZoom = (e, photoUrl) => {
    setZoomState(!zoomState);
    const { left, top, width, height } = e.target.getBoundingClientRect();
    console.log(left, top, width, height);
    const x = (e.pageX - left) / width * 100;
    const y = (e.pageY - top) / height * 100;
    console.log(x, y);

    setZoom({
      backgroundImage: `url(${photoUrl})`,
      backgroundPosition: `${x}% ${y}%`,
    })
  }

  const handleMouseMove = (e, photoUrl) => {
    // console.log(e.target.getBoundingClientRect());
   const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width * 100;
    const y = (e.pageY - top) / height * 100;
    setZoom({
      backgroundImage: `url(${photoUrl})`,
      backgroundPosition: `${x}% ${y}%`
    })
  }

    if (!currentStyle.photos) {
      return <p>Loading...</p>
    } else {
    return (
      <div className="expanded-view-container">

          <div className="expanded-view-gallery-main">
                    <img src={leftArrow} className="expanded-view-left-arrow" onClick={handlePageChange} name="back" value={page}/>
                    {currentStyle.photos.map((photo, index) => {
                      if (page === index) {
                        return (
                          <figure onClick={(e) => handleZoom(e, photo.url)} style={!zoom ? { backgroundImage: `url(${photo.url})`, backgroundPosition: '0% 0%'} : zoom} onMouseMove={(e) => handleMouseMove(e, photo.url)}>
                            <img className={!zoomState ? "expanded-view-main" : "expanded-view-main active"} src={photo.url} />
                          </figure>
                        )
                      }
                    })}
                    <img src={rightArrow} className="expanded-view-right-arrow" onClick={handlePageChange} name="front" value={page}/>
          </div>

        {/* <div className="expanded-view-gallery-main">
                    <img src={leftArrow} className="expanded-view-left-arrow" onClick={handlePageChange} name="back" value={page}/>
                    {currentStyle.photos.map((photo, index) => {
                      if (page === index) {
                        return (
                          <img className="expanded-view-main" src={photo.url} onClick={expandView}/>
                        )
                      }
                    })}
                    <img src={rightArrow} className="expanded-view-right-arrow" onClick={handlePageChange} name="front" value={page}/>
          </div> */}

        <div className="expanded-view-thumbnail-container" >
            {currentStyle.photos && currentStyle.photos.map((photo, index, key) => (
                <img src={photo.thumbnail_url} className={ page === index ? "expanded-view-thumbnail active" : "expanded-view-thumbnail" } onClick={handleClick} name={index} />
            ))}
        </div>

      </div>
    )};
}

export default ProductExpandedView
import React from 'react';

import FaceBookIcon from '../../../../assets/facebook.svg';
import PinterestIcon from '../../../../assets/pinterest.svg';
import TwitterIcon from '../../../../assets/twitter.svg';

import './product-social-media.styles.scss';

const ProductSocialMedia = () => {

  return (
    <div className="social-media-container">
      <a href="https://www.facebook.com">
        <img src={FaceBookIcon} alt="facebook-icon" style={{ height: '40px', width: '40px'}} className="social-media-icon"/>
      </a>
      <a href="https://www.pinterest.com">
        <img src={PinterestIcon} alt="pinterest-icon"  style={{ height: '40px', width: '40px'}} className="social-media-icon"/>
      </a>
      <a href="https://www.twitter.com">
        <img src={TwitterIcon} alt="twitter-icon" style={{ height: '40px', width: '40px'}} className="social-media-icon"/>
      </a>
    </div>
  );
}

export default ProductSocialMedia
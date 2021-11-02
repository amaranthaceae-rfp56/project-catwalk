import React from 'react';

import FaceBookIcon from '../../../../assets/facebook.svg';
import PinterestIcon from '../../../../assets/pinterest.svg';
import TwitterIcon from '../../../../assets/twitter.svg';

import './product-social-media.styles.scss';

const ProductSocialMedia = () => {

  return (
    <div className="social-media-container">
      <a href="https://www.facebook.com">
        <img src={FaceBookIcon} style={{ height: '50px', width: '50px'}} className="social-media-icon"/>
      </a>
      <a href="https://www.pinterest.com">
        <img src={PinterestIcon} style={{ height: '50px', width: '50px'}} className="social-media-icon"/>
      </a>
      <a href="https://www.twitter.com">
        <img src={TwitterIcon} style={{ height: '50px', width: '50px'}} className="social-media-icon"/>
      </a>
    </div>
  );
}

export default ProductSocialMedia
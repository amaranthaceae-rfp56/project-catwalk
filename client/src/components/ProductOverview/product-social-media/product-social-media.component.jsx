import React from 'react';

import FaceBookIcon from '../../../../assets/facebook.svg';
import PinterestIcon from '../../../../assets/pinterest.svg';
import TwitterIcon from '../../../../assets/twitter.svg';

import './product-social-media.styles.scss';

const ProductSocialMedia = () => {

  return (
    <div className="social-media-container">
      <img src={FaceBookIcon} style={{ height: '50px', width: '50px'}} className="social-media-icon"/>
      <img src={PinterestIcon} style={{ height: '50px', width: '50px'}} className="social-media-icon"/>
      <img src={TwitterIcon} style={{ height: '50px', width: '50px'}} className="social-media-icon"/>
    </div>
  );
}

export default ProductSocialMedia
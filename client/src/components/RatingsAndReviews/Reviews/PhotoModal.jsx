import React from 'react';

const PhotoModal = (props) => {

  return (
    <div>
      <img src = {props.image} className = 'photo-modal'></img>
    </div>
  );
};

export default PhotoModal;
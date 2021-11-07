import React from 'react';

const PhotoModal = (props) => {

  return (
    <div className = 'photo-modal-div'>
      <img src = {props.image} className = 'photo-modal'></img>
    </div>
  );
};

export default PhotoModal;
import React from 'react';
//SCSS is currently at bottom of the _ratings.scss file
const Modal = (props) => {

  return (
    <div className = 'modal-background'>
      <div className = 'modal-container'>
        {props.component}
      </div>
    </div>
  );
};

export default Modal;
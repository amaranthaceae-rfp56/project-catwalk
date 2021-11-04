import React from 'react';
//SCSS is currently at bottom of the _ratings.scss file
const Modal = (props) => {
  const closeModal = () => {
    // setModal(null);
    const closeBoth = props.both || true;
    if (closeBoth) {
      if (event.target.className === 'modal-background' || event.target.className === 'modal-close') {
        props.callback(false);
      }
    } else {
      if (event.target.className === 'modal-close') {
        props.callback(false);
      }
    }




  }
  return (
    <div onClick = {closeModal} className = 'modal-background'>
      <div className = 'modal-container'>
        <div className = 'modal-close'>X</div>
        {props.component}
      </div>
    </div>
  );
};

export default Modal;
import React from 'react';
//SCSS is currently at bottom of the _ratings.scss file
const Modal = (props) => {
  let left = props.left || 92;
  let top = props.top || 55;
  const closeModal = () => {
    // setModal(null);
    let closeBoth;

    props.both === undefined ? closeBoth = true : closeBoth = false;

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
    <div onClick={closeModal} className='modal-background'>
      <div className='modal-container'>
        <div style={{ left: `${left}%`, top: `${top}px` }} className='modal-close'>X</div>
        {props.component}
      </div>
    </div>
  );
};

export default Modal;
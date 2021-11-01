import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from "react-modal";

Modal.setAppElement("#root");

const CompareModal = ({ left, right }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const obj = ((left, right) => {
    var res = {};
    const helper = (features, increment) => {
      for (var feature of features) {
        const key = feature.value;
        if (res[key] === undefined) {
          res[key] = 0;
        }
        res[key] += increment;
      }
    };
    helper(left, 1);
    helper(right, 2);
    return res;
  })(left.features, right.features);

  return (
    <div>
      <button onClick={toggleModal}>Open modal</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <div>{Object.keys(obj).map((feature, index) => {
          return (<div key={index}>
            <span>{obj[feature] % 2 === 1 ? 'V' : ''}</span>
            <span>{feature}</span>
            <span>{obj[feature] % 2 === 0 ? 'V' : ''}</span>
          </div>);
        })}</div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  );
};

CompareModal.propTypes = {
  left: PropTypes.object.isRequired,
  right: PropTypes.object.isRequired
};

export default CompareModal;

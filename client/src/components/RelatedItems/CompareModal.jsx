import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/sections/_related.scss';

const CompareModal = ({ left, right }) => {



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
    <div className="compare-modal">
      <h3>Compare List</h3>
      <h4 className="left-compare">{left.name}</h4>
      <h4 className="right-compare">{right.name}</h4>
      <div className="feature">{Object.keys(obj).map((feature, index) => {
        return (
          <div key={index}>
            <span className="left-compare-mark">{obj[feature] % 2 === 1 ? 'V' : ''}</span>
            <span className="compare-feature">{feature}</span>
            <span className="right-compare-mark">{obj[feature] % 2 === 0 ? 'V' : ''}</span>
          </div>);
      })}
      </div>
    </div >
  );
};

CompareModal.propTypes = {
  left: PropTypes.object.isRequired,
  right: PropTypes.object.isRequired
};

export default CompareModal;

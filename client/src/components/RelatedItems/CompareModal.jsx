import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/sections/_related.scss';


const CompareModal = ({ left, right }) => {
  // console.log('modal >>>', left.features)
  // console.log('right modal >>>', right.features)

  var obj = new Set();
  for (var i = 0; i < left.features.length; i++) {
    obj.add(left.features[i].feature);
  }
  for (var j = 0; j < right.features.length; j++) {
    obj.add(right.features[j].feature);
  }
  var totalFeatures = Array.from(obj);
  // console.log('set', totalFeatures);

  const getFeatureValue = (arr, feature) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].feature === feature) {
        return arr[i].value;
      }
    }
    return ' ';
  };

  return (
    <div className="compare-modal">
      <h3>Compare List</h3>
      <table className="modal-table-container">
        <tr className='feature-table-title'>
          <th className="left-compare">{left.name}</th>
          <th className="right-compare">{right.name}</th>
        </tr>
        <div className="feature">{totalFeatures.map((feature, index) => {

          return (
            <div key={index} className='feature-table'>
              <span className="left-compare-mark">{getFeatureValue(left.features, feature)}</span>
              <span className="compare-feature">{feature}</span>
              <span className="right-compare-mark">{getFeatureValue(right.features, feature)}</span>
            </div>);
        })}
        </div>
      </table>
    </div >
  );
};

CompareModal.propTypes = {
  left: PropTypes.object.isRequired,
  right: PropTypes.object.isRequired
};

export default CompareModal;

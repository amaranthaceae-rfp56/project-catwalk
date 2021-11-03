import React from 'react';


const Characteristics = (props) => {
  return (
    <div className = 'characteristics-container'>
      <p className = 'characteristic-label'>QUALITY</p>
      <div className = 'characteristic-line-plot'>
          <div className = 'line-plot-marker'>&#9679;</div>
      </div>
      <div className = 'line-plot-value-marks'>
        <p>Too Small</p>
        <p>Perfect</p>
        <p>Too Big</p>
      </div>
    </div>
  );
};

export default Characteristics;
import React from 'react';

const BarGraph = (props) => {



  const result = [];
  for (let i = 5; i > 0; i--) {

    const percent = props.ratings[i] / props.count;

    result.push(
    <div className = 'graph-rating' key = {`graph-section-${i}`}>
      <div className = 'label-container'>
        <p className = 'graph-rating-value'>{'★'.repeat(i)}</p>
        <p className = 'graph-rating-count'>{props.ratings[i]}</p>
      </div>
        <div className = 'graph-bar'>
            <div className = 'graph-bar-level' style = {{'--bar': percent}}></div>
        </div>
  </div>);

  }

  return (
    <div className = 'ratings-graph'>

      {result.map((bar) => {return bar})}


    </div>
  );
};

export default BarGraph;
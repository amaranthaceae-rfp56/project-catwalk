import React from 'react';


const Sorter = (props) => {




  // props.sort(sort);
  return (
    <div className = 'review-sorter'>
      Sort reviews by: <select onChange={props.sort}id = 'sorter'>
        <option>Relevance</option>
        <option>Helpfulness</option>
        <option>Newest</option>
      </select>
    </div>
  );
};

export default Sorter;
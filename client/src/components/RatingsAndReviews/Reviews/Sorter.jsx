import React from 'react';


const Sorter = (props) => {



  return (
    <div className = 'review-sorter'>
      Sort reviews by: <select id = 'sorter'>
        <option>Relevance</option>
        <option>Helpfulness</option>
        <option>Newest</option>
      </select>
    </div>
  );
};

export default Sorter;
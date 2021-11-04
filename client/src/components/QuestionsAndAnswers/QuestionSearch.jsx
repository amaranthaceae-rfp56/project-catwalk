import React from 'react';
import PropTypes from 'prop-types';

const QuestionSearch = (props) => {

  //const [searchTerm, setSearchTerm] = useState('');

  const filterResults = (e) => {
    console.log(e.target.value);
    props.handleSearch(e.target.value);
    // setSearchTerm(e.target.value);
    // if (searchTerm.length > 2) {
    //   console.log('filter results');
    // } else {
    //   console.log('dont filter results');
    // }
  };

    return (
      <input className="questions-search-bar" onChange={filterResults} placeholder="Have a question? Search for answers…"/>
    )
}

QuestionSearch.propTypes = {
  handleSearch: PropTypes.string.isRequired,
};


export default QuestionSearch;
import React from 'react';

import ProductState from '../context/products/ProductState.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ProductState>
        <h1>This is the eawgwg</h1>
      </ProductState>
    )
  }
}

export default App;
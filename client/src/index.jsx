import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './styles/App.scss';

import ClickTrackerState from './context/clickTracker/ClickTrackerState';

ReactDOM.render(
  <ClickTrackerState>
      <App />
  </ClickTrackerState>,
  document.getElementById('root')
);

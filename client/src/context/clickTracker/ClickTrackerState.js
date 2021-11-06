import React, { useContext, useReducer } from 'react';
import ClickTrackerContext from './ClickTrackerContext.js';
import ClickTrackerReducer from './ClickTrackerReducer.js';

import {
  ADD_CLICKED_DATA
} from '../types';

const ClickTrackerState = (props) => {
  const initialState = {
    trackedClicks: []
  }

  const [state, dispatch] = useReducer(ClickTrackerReducer, initialState);

  const getTrackedClick = (element, module, timestamp) => {
    const d = new Date(timestamp * 1000);

    const data = {
      element,
      module,
      time: d
    }

    dispatch({
      type: ADD_CLICKED_DATA,
      payload: data
    })
  }

  return (
    <ClickTrackerContext.Provider value={{ trackedClicks: state.trackedClicks, getTrackedClick }}>
        {props.children}
    </ClickTrackerContext.Provider>
  )
}

export default ClickTrackerState;
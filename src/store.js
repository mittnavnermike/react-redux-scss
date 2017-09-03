/* global window */

import { compose, createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';

// Import the root reducer
import rootReducer from './reducers/index';

// import data
import app from './data/app';

// Get state from localStorage if exist
const localStorageOrder = JSON.parse(window.localStorage.getItem('app'));

// Create an object for the default data
const defaultState = {
    app: localStorageOrder || app,
};

// For Dev (redux dev tools)
const store = createStore(
  rootReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// For Prod
// const store = createStore(rootReducer, defaultState, enhancer);

export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;

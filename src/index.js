import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import middleware into redux
// import promiseMiddleware from 'redux-promise';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

// hook middleware into redux process
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

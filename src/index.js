/**
* @file 入口
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';
import Async from './middlewares/async';


import { Router, browserHistory } from 'react-router';
import routes from './routes';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
     <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));

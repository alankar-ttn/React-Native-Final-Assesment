import {applyMiddleware, compose, createStore} from 'redux';

import allReducers from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers = compose;

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;

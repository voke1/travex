import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import makeRootReducer from './reducer';
import {createLogger} from 'redux-logger';

const log = createLogger({diff: true, collapsed: true});

export default (iniitialState = {}) => {
  const middleware = [thunk, log];

  const enhancers = [];

  const store = createStore(
    makeRootReducer(),
    iniitialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  );

  return store;
};

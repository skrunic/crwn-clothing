/**
 * Middleware - sits between an action and a reducer
 *      Action > Middleware > Reducer
 * It's used for side-effects like API fetching
 * Middleware receives actions, does something with them and passes into reducer
 */

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from '../root-reducer';

const middlewares = [logger]; 

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
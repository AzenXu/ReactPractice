/** 
 * 这个Store和Flux中的Store不一样，以前的Store已经被Reducer实现了
 * 新Store相当于一个总管
 */

import { combineReducers, createStore, applyMiddleware } from 'redux';
import rootReducer from '../Reducers';
import thunk from 'redux-thunk';

let combineReducers = combineReducers(rootReducer);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

let store = createStoreWithMiddleware(
    combineReducers
);

export default store;
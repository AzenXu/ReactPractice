import { combineReducers, createStore, applyMiddleware } from 'redux';
import rootReducer from '../Reducers';
import thunk from 'redux-thunk';

let combinedReducer = combineReducers(rootReducer);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

let store = createStoreWithMiddleware(
    combinedReducer
);

export default store;
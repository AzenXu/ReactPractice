import { createStore, combineReducers,applyMiddleware } from "redux";
import reducers from '../Reducers';
import thunk from "redux-thunk";

let composeReducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(composeReducer);
export default store;
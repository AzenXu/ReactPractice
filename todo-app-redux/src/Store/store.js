/** 
 * 这个Store和Flux中的Store不一样，以前的Store已经被Reducer实现了
 * 新Store相当于一个总管
 */

import { combineReducers, createStore } from 'redux';
import rootReducer from '../Reducers';

//  需要通过combineReducers把小的Reducer汇总起来
//  之后，通过组合好的Reducer，调用createStore，创建好Store

//  Store实际上封装了所有的Reducer，Reducer仅和Store通信
let combineReducers = combineReducers(rootReducer);

let store = createStore(combineReducers);

export default store;
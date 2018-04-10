/** 
 * 这个Store和Flux中的Store不一样，以前的Store已经被Reducer实现了
 * 新Store相当于一个总管
 */

import { combineReducers, createStore, applyMiddleware } from 'redux';
import rootReducer from '../Reducers';

//  需要通过combineReducers把小的Reducer汇总起来
//  之后，通过组合好的Reducer，调用createStore，创建好Store

//  Store实际上封装了所有的Reducer，Reducer仅和Store通信
let combineReducers = combineReducers(rootReducer);

// ({ dispatch }) 这个是store中的dispatch
//  thunkMiddleware 这个方法就是用来处理action传入的同步/异步东东的
const thunkMiddleware = ({ dispatch }) => {

    return (dispatch) => {

        //  这里的action就是从TODOAction传进来的action
        return (action) => {

            //  判断action
            if (typeof action === 'funciton') {

                return aciton(dispatch); // 当action是函数的时候，把dispatch交给action，让action处理完之后手动回调
            }
            return dispatch(action); // 如果是个字典，直接通过dispatch分发
        }

    }
}

let store = createStore(
    combineReducers,
    applyMiddleware(thunkMiddleware)
);


export default store;
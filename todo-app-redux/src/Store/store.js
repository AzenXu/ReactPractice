import { combineReducers, createStore, applyMiddleware } from 'redux';
import rootReducer from '../Reducers';
import thunk from 'redux-thunk';

let combinedReducer = combineReducers(rootReducer);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

let store = createStoreWithMiddleware(
    combinedReducer
);

export default store;

/** view的串联方式
export default connect(
    (state) => ({todosss: state.todos}),
    {
        toggleItemProp: TODOAction.toggleItemList,
        deleteItemProp: TODOAction.deleteItem
    }
)(TODOListContainer);
 */

/** rootReducer的写法
let rootReducer = {
    todos,
    user
}
 */

 /**猜想
  * 结合上述两种写法，我们可以猜测:
  * store中维护一个状态机变量state，state有两个属性todos和user
  * connect方法的本质：
  *   1. 把store.state 和 view.props关联起来，这样state变可以刷view
  *   2. 把Action的结果字典a 和 reduce对a的处理结果b 与 store.state关联起来
  * 最终实现实现：view发出action -> reduce处理action -> store.state变 -> view.props变
  */
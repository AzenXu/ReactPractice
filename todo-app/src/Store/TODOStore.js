
/**
 * 使用Flux Util优化Store 
 */

import Constants from '../Constants/Constants';
import TODODispatcher from '../Dispatcher/TODODispatcher';
import { ReduceStore } from 'flux/utils'; // 导入ReduceStore

// let TODOStore = {

//     getTodos() {
//         return todos;
//     },

//     addObserver (callBack) { // ReduceStore已经封装了这个方法
//         _emitter.on(CHANGE_TODOS,callBack);

//         return () => _emitter.removeListener(CHANGE_TODOS,callBack);
//     },

//     _dispatchToken: TODODispatcher.register((action) => {
//         switch (action.type) {
//             case Constants.TOGGLEITEM:
//                 todos = _toggleItemList(todos, action.ID);
//                 break;

//             case Constants.DELETEITEM:
//                 todos = _deleteItemList(todos, action.ID);
//                 break;

//             case Constants.CREATEITEM:
//                 todos = _createItem(todos, action.title);
//                 break;

//             case Constants.EDITITEM:
//                 console.log("还没实现");
                
//                 break;

//             case Constants.LOADDATA:
//                 todos = action.todos;
//                 break;
        
//             default:
//                 break;
//         }

//         _emitter.emit(CHANGE_TODOS);
//     })
// }

class TODOStore extends ReduceStore {
    getInitialState() {
          return [];  // 类似getTodos方法
    } 
    
    //  框架会对比修改后的todos和修改前的todos，如果有变化才会刷新View
    reduce(todos, action) {
        switch (action.type) {
            case Constants.TOGGLEITEM:
                return _toggleItemList(todos, action.ID);

            case Constants.DELETEITEM:
                return  _deleteItemList(todos, action.ID);

            case Constants.CREATEITEM:
                return _createItem(todos, action.title);

            case Constants.EDITITEM:
                console.log("还没实现");
                break;

            case Constants.LOADDATA:
                return action.todos;

            default:
                break;
        } 
    } 
}

let _toggleItemList = (todos, ID) => {

    let newTodos = [...todos]; // 复制todos，不修改上一个传进来的todos

    let target = newTodos.find((item) => item.id === ID);
    target.checked = !target.checked;

    return newTodos;
}

let _deleteItemList = (todos, ID) => {
    let newTodos = [...todos]; // 复制todos，不修改上一个传进来的todos

    let idx = newTodos.findIndex((item) => item.id === ID);
    newTodos.splice(idx, 1);
    return newTodos;
}

let _createItem = (todos, title) => {
    let newTodos = [...todos]; // 复制todos，不修改上一个传进来的todos

    let lastID = newTodos.length > 0 ? newTodos[newTodos.length - 1].id : 100;
    let newitem = {
        id: lastID + 1,
        title: title,
        checked: false
    }
    newTodos.push(newitem);
    return newTodos;
}

//  需要在初始化的时候，把Dispatcher传给TODOStore，以关联起来。这样就不用自己去监听Dispatcher发布Action这个行为了。reduce 函数都封装好了
export default new TODOStore(TODODispatcher);
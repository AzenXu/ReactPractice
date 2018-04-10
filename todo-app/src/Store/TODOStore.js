
/**
 * 使用Flux Util优化Store 
 */

import Constants from '../Constants/Constants';
import TODODispatcher from '../Dispatcher/TODODispatcher';
import { ReduceStore } from 'flux/utils';

class TODOStore extends ReduceStore {
    getInitialState() {
          return [];
    } 
    
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

    let newTodos = [...todos];

    let target = newTodos.find((item) => item.id === ID);
    target.checked = !target.checked;

    return newTodos;
}

let _deleteItemList = (todos, ID) => {
    let newTodos = [...todos];
    let idx = newTodos.findIndex((item) => item.id === ID);
    newTodos.splice(idx, 1);
    return newTodos;
}

let _createItem = (todos, title) => {
    let newTodos = [...todos];

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
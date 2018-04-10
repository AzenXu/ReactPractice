/** 
 * TODOStore需要接收Dispatcher的信息
 */

import Constants from '../Constants/Constants';
import TODODispatcher from '../Dispatcher/TODODispatcher';

// 1. 把数据放到Store中存储
// 2. View取数据的时候来TODOStore中取
let todos = [];

let TODOStore = {
    //  获取数据的方法 - 只有get方法木有set方法
    //  不能直接修改数据，只能通过Action来修改
    getTodos = () => {
        return todos;
    },
    //  获取Dispatcher通知，相应action
    //  token的作用：项目中可能有多个store, 一个store想优先执行，则可以通过另一个store的token，让它先暂停一段时间
    _dispatchToken: TODODispatcher.register((action) => {
        switch (action.type) {
            case Constants.TOGGLEITEM:
                todos = _toggleItemList(todos, action.ID);
                break;

            case Constants.DELETEITEM:
                todos = _deleteItemList(todos, action.ID);
                break;

            case Constants.CREATEITEM:
                todos = _createItem(todos, action.title);
                break;

            case Constants.EDITITEM:
                "自己实现下";
                break;

            case Constants.LOADDATA:
                todos = action.todos;
                break;
        
            default:
                break;
        }
    }) // 在Dispatcher中注册下，所有action都会发进来
}

let _toggleItemList = (todos, ID) => {
    let target = todos.find((item) => item.id === ID);
    target.checked = !target.checked;
    return todos;
}

let _deleteItemList = (todos, ID) => {
    let idx = todos.findIndex((item) => item.id === ID); // 找到索引
    todos.splice(idx, 1);
    return todos;
}

let _createItem = (todos, title) => {
    let lastID = todos.length > 0 ? todos[todos.length - 1].id : 100;
    let newitem = {
        id: lastID + 1,
        title: title,
        checked: false
    }
    todos.push(newitem);
    return todos;
}

module.exports = TODOStore;
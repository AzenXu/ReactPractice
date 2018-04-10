/** 
 * TODOStore需要接收Dispatcher的信息
 */

import Constants from '../Constants/Constants';
import TODODispatcher from '../Dispatcher/TODODispatcher';

// ---
// 为了传消息给View
import EventEmitter from 'events';
const CHANGE_TODOS = "CHANGE_TODOS";
const _emitter = new EventEmitter;
// ---

// 1. 把数据放到Store中存储
// 2. View取数据的时候来TODOStore中取
let todos = [];

let TODOStore = {
    //  获取数据的方法 - 只有get方法木有set方法
    //  不能直接修改数据，只能通过Action来修改
    getTodos() {
        return todos;
    },
    //  Target: todos变了让View感知到，并刷新View
    //  Action: 外界传进来一个闭包方法，todos变了就调这个闭包方法，把todos作为参数传出去...
    //  方案二：使用EventEmitter这个东东，在合理的时间触发callBack
    addObserver (callBack) {
        //  又类似个通知中心... 监听CHANGE_TODOS这个消息的发出，执行callBack
        _emitter.on(CHANGE_TODOS,callBack);

        //  返回一个Dispossibal，用于view移除监听
        return () => _emitter.removeListener(CHANGE_TODOS,callBack);
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

        //  action处理完之后，发通知
        _emitter.emit(CHANGE_TODOS);
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

export default TODOStore;
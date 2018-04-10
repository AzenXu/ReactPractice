import Constants from '../Constants/Constants';
import TODODispatcher from '../Dispatcher/TODODispatcher';

// ---
// 为了传消息给View
import EventEmitter from 'events';
const CHANGE_TODOS = "CHANGE_TODOS";
const _emitter = new EventEmitter();
// ---

let todos = [];

let TODOStore = {

    getTodos() {
        return todos;
    },

    addObserver (callBack) {
        _emitter.on(CHANGE_TODOS,callBack);

        return () => _emitter.removeListener(CHANGE_TODOS,callBack);
    },

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
                console.log("还没实现");
                
                break;

            case Constants.LOADDATA:
                todos = action.todos;
                break;
        
            default:
                break;
        }

        _emitter.emit(CHANGE_TODOS);
    })
}

let _toggleItemList = (todos, ID) => {
    let target = todos.find((item) => item.id === ID);
    target.checked = !target.checked;
    return todos;
}

let _deleteItemList = (todos, ID) => {
    let idx = todos.findIndex((item) => item.id === ID);
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
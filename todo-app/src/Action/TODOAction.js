
import Constants from '../Constants/Constants'
import Dispatcher from '../Dispatcher/TODODispatcher'
import TODODispatcher from '../Dispatcher/TODODispatcher';

let TODOAction = {
    toggleItemList = (ID) => { // 不需要传todos的原因在于：store中存了需要改变的todos
        TODODispatcher.dispatch({
            id,
            type: Constants.TOGGLEITEM
        })
    },
    deleteItem = (ID) => {
        TODODispatcher.dispatch({
            id,
            type: Constants.DELETEITEM
        })
    },
    createItem = (title) => {
        TODODispatcher.dispatch({
            title,
            type: Constants.CREATEITEM
        })
    },
    editItem = (id, title) => {
        TODODispatcher.dispatch({
            id,
            title,
            type: Constants.EDITITEM
        })
    },
    loadData = () => {
        fetch('todos.json')
            .then((response) => response.json())
            .then((todos) => {
                console.log(todos);
                TODODispatcher.dispatch({
                    todos,
                    type: Constants.LOADDATA
                })
            })
    }
}

module.exports = TODOAction;
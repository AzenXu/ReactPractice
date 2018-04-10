
/**
 * 所有动作都从Action中触发，逻辑清晰
 */

import Constants from '../Constants/Constants'
import TODODispatcher from '../Dispatcher/TODODispatcher';

let TODOAction = {
    toggleItemList(ID) {
        TODODispatcher.dispatch({
            ID,
            type: Constants.TOGGLEITEM
        })
    },
    deleteItem(ID) {
        TODODispatcher.dispatch({
            ID,
            type: Constants.DELETEITEM
        })
    },
    createItem (title) {
        TODODispatcher.dispatch({
            title,
            type: Constants.CREATEITEM
        })
    },
    editItem (ID, title) {
        TODODispatcher.dispatch({
            ID,
            title,
            type: Constants.EDITITEM
        })
    },
    loadData () {
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

export default TODOAction;
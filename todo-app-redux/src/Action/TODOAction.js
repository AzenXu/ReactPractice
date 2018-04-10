
/**
 * 所有动作都从Action中触发，逻辑清晰
 */

import Constants from '../Constants/Constants'
import TODODispatcher from '../Dispatcher/TODODispatcher';

let TODOAction = {
    toggleItemList(ID) {
        return {
            ID,
            type: Constants.TOGGLEITEM
        }
    },
    deleteItem(ID) {
        return {
            ID,
            type: Constants.DELETEITEM
        }
    },
    createItem (title) {
        return {
            title,
            type: Constants.CREATEITEM
        }
    },
    editItem (ID, title) {
        return {
            ID,
            title,
            type: Constants.EDITITEM
        }
    },
    loadData () { // 异步操作先不处理..等等回过头来搞它
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
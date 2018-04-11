
import Constants from '../Constants'

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
    loadData () {
        return (dispatch) => {
            fetch('todos.json')
                .then((response) => response.json())
                .then((todos) => {
                    console.log(todos);
                    dispatch({
                        type: Constants.LOADDATA,
                        todos
                    })
                })
        }
    }
}

export default TODOAction;
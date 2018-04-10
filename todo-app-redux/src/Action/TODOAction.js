
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
    loadData () {
        //  下面的dispatch就是store中的dispatch...等等解释
        //  返回了一个箭头函数
        //  处理异步action的方法 - 执行完之后再调用dispatch进行数据分发
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
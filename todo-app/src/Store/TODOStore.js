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
    //  获取Dispatcher通知
    _dispatchToken: TODODispatcher.register((action) => {
        switch (action.type) {
            case Constants.TOGGLEITEM:
                
                break;

            case Constants.DELETEITEM:

                break;

            case Constants.CREATEITEM:

                break;

            case Constants.EDITITEM:

                break;

            case Constants.LOADDATA:

                break;
        
            default:
                break;
        }
    }) // 在Dispatcher中注册下，所有action都会发进来
}

module.exports = TODOStore;
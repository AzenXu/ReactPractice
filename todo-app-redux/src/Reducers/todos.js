/**
 * 完成Reducer
 * Reducer这个东东实际上是替换了Flux中的Store
 * 所有的reducer，本质都是一个函数
 */

 // --- 这坨代码不重要，可以放入工具类
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
// ---

// ---

//  下面这一段才是Reducer的核心
// 参数: state，并设置默认值为一个空数组，action设置默认值为空字典
export default (state = [], action = {}) => {

    // Reducer的实现，其实是拷贝了原来的TODOStore中的东东
    switch (action.type) {
        case Constants.TOGGLEITEM:
            return _toggleItemList(state, action.ID);

        case Constants.DELETEITEM:
            return _deleteItemList(state, action.ID);

        case Constants.CREATEITEM:
            return _createItem(state, action.title);

        case Constants.EDITITEM:
            console.log("还没实现");
            break;

        case Constants.LOADDATA:
            return action.todos;

        default:
            return state;
    }

}
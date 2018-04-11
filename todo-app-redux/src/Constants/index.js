
let toggleItemList = (todos, ID) => {

    let newTodos = [...todos];

    let target = newTodos.find((item) => item.id === ID);
    target.checked = !target.checked;

    return newTodos;
}

let deleteItemList = (todos, ID) => {
    let newTodos = [...todos];
    let idx = newTodos.findIndex((item) => item.id === ID);
    newTodos.splice(idx, 1);
    return newTodos;
}

let createItem = (todos, title) => {
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

export default {
    toggleItemList, 
    deleteItemList, 
    createItem,
    TOGGLEITEM: "toggleItem",
    DELETEITEM: "deleteItem",
    CREATEITEM: "createItem",
    EDITITEM: "editItem",
    LOADDATA: "loadData"
 };
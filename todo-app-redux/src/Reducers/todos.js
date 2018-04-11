import Constants from '../Constants'

export default (state = [], action = {}) => {

    switch (action.type) {
        case Constants.TOGGLEITEM:
            return Constants.toggleItemList(state, action.ID);

        case Constants.DELETEITEM:
            return Constants.deleteItemList(state, action.ID);

        case Constants.CREATEITEM:
            return Constants.createItem(state, action.title);

        case Constants.EDITITEM:
            console.log("还没实现");
            break;

        case Constants.LOADDATA:
            return action.todos;

        default:
            return state;
    }
}
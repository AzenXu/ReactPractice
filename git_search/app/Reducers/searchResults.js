import { ActionType } from "../Consts";

export default (state = [], action) => {
    switch (action.type) {
        case ActionType.LOAD_DATA:
            return action.results;
        default:
            return state;
    }
};
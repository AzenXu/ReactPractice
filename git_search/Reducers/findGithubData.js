
import * as types from '../Constants/Types';

const githubDataInitialState = []

export default (state = githubDataInitialState, action) => {
    switch (action.type) {
        case types.FIND_GITHUB_DATA:
            return action.items;
        default:
            return state;
    }
};
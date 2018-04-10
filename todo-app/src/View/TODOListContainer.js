import React, { Component } from 'react';
import TODOList from './TODOList';
import TODOStore from '../Store/TODOStore'
import TODOAction from '../Action/TODOAction'

import { Container } from 'flux/utils'

class TODOListContainer extends Component {

    static getStores() {
        return [TODOStore];
    }

    static calculateState(prevState) {
        return {
            todos: TODOStore.getState(),
        };
    }

    render() {

        const { todos } = this.state;

        return <TODOList items={ todos } toggleItemList={TODOAction.toggleItemList} deleteItemList={TODOAction.deleteItem} />
    }
}

export default Container.create(TODOListContainer);
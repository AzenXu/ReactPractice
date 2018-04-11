import React, { Component } from 'react';
import TODOList from './TODOList';
import TODOAction from '../Action/TODOAction'

class TODOListContainer extends Component {

    render() {

        const { todos, toggleItemList, deleteItem } = this.props;

        return <TODOList 
        items={ todos }
        toggleItemList={toggleItemList}
        deleteItemList={deleteItem} />
    }
}

export default Container.create(TODOListContainer);
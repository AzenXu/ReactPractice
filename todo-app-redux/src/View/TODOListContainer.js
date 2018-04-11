import React, { Component } from 'react';
import TODOList from './TODOList';
import TODOAction from '../Action/TODOAction';

import { connect } from 'react-redux'; // connect这个东东用来做串联

class TODOListContainer extends Component {

    render() {

        const { todosss, toggleItemProp, deleteItemProp } = this.props;

        return <TODOList 
            items={ todosss }
            toggleItemList={toggleItemProp}
            deleteItemList={deleteItemProp} />
    }
}

export default connect(
    (state) => ({todosss: state.todos}),
    {
        toggleItemProp: TODOAction.toggleItemList,
        deleteItemProp: TODOAction.deleteItem
    }
)(TODOListContainer);
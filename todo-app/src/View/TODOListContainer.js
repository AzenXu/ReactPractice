import React, { Component } from 'react';
import TODOList from './TODOList';
import TODOStore from '../Store/TODOStore'
import TODOAction from '../Action/TODOAction'

class TODOListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: TODOStore.getTodos()
        }
    }

    render() {

        const { todos } = this.state;

        return <TODOList items={ todos } toggleItemList={TODOAction.toggleItemList} deleteItemList={TODOAction.deleteItem} />
    }

    componentDidMount() {
        this.removeObserver = TODOStore.addObserver(() => {
            this.setState({
                todos: TODOStore.getTodos()
            });
        });
    }

    componentWillUnmount() {
        this.removeObserver();
    }
}

export default TODOListContainer;
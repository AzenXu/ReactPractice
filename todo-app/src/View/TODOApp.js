/**
 * 优化：使用Container-Pattern设计模式，简化TODOApp中的代码
 */


import React, { Component } from 'react';
import TODOHeaderContainer from './TODOHeaderContainer';
import TODOInputContainer from './TODOInputContainer';
import TODOList from './TODOList';

import TODOAction from '../Action/TODOAction'
import TODOStore from '../Store/TODOStore'

class TODOApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: TODOStore.getTodos()
        }
    }

    componentDidMount() {
        this.removeObserver = TODOStore.addObserver(() => {
            this.setState({
                todos:TODOStore.getTodos()
            });
        });
        TODOAction.loadData();
    }

    componentWillUnmount() {
        this.removeObserver();
    }

    render() {

        const { todos } = this.state;

        return (
            <div>
                <TODOHeaderContainer />
                <TODOInputContainer />
                <TODOList items={todos} toggleItemList={TODOAction.toggleItemList} deleteItemList={TODOAction.deleteItem}/>
            </div>
        )
    }
}

export default TODOApp;
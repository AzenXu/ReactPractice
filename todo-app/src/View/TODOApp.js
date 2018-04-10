/**
 * 优化：使用Container-Pattern设计模式，简化TODOApp中的代码
 */


import React, { Component } from 'react';
import TODOHeaderContainer from './TODOHeaderContainer';
import TODOInputContainer from './TODOInputContainer';
import TODOListContainer from './TODOListContainer';

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
        return (
            <div>
                <TODOHeaderContainer />
                <TODOInputContainer />
                <TODOListContainer />
            </div>
        )
    }
}

export default TODOApp;
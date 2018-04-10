/**
 * 优化：使用Container-Pattern设计模式，简化TODOApp中的代码
 * 这就是Action和Store带来的神器效果...Flux还是蛮腻害的
 * 
 * 继续优化：使用Flux Utils进行进一步优化
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
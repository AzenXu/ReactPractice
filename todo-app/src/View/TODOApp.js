/**
 * 优化：使用Container-Pattern设计模式，简化TODOApp中的代码
 */


import React, { Component } from 'react';
import TODOHeader from './TODOHeader';
import TODOInput from './TODOInput';
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

        //  状态机刷新之后，会重新计算todoCount
        let todoCount = todos.filter((object) => !object.checked).length;

        return (
            <div>
                <TODOHeader name="双笙子" todoCount={ todoCount }/>
                <TODOInput autoFocus={ true } onKeyDown={ (event)=>{
                    if (event.keyCode === 13 && event.target.value.length > 0) { // 按下enter键键
                        TODOAction.createItem(event.target.value);
                        event.target.value = ""; // 清空输入框
                    }
                } }/>
                <TODOList items={todos} toggleItemList={TODOAction.toggleItemList} deleteItemList={TODOAction.deleteItem}/>
            </div>
        )
    }
}

export default TODOApp;
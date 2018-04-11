/**
 * 目前自己写的Container的问题：重复代码太多
 * flux util
 */

import React, { Component } from 'react';
import TODOHeader from './TODOHeader';
// Redux中，所有View都不需要使用状态机变量
import { connect } from 'react-redux';

class TODOHeaderContainer extends Component {

    render() {

        const { todos } = this.props; // 这里没state了，以后所有UI数据都来自于props
        let todoCount = todos.filter((object) => !object.checked).length;

        return <TODOHeader name="双笙子" todoCount={todoCount} />;
    }
}

// 不需要和Action打交道的绑定方法
export default connect(
    (state) => ({ todos: state.todos })
)(TODOHeaderContainer);
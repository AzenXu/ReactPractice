import React, { Component } from 'react';
import propTypes from 'prop-types';

class TODOHeader extends Component {

    static get defaultProps() {
        return {
            name: "刘德华",
            todoCount: 98
        }
    }

    static propTypes = {
        name: propTypes.string.isRequired,
        todoCount: propTypes.number.isRequired
    }

    render() {
        const { name, todoCount } = this.props; // 将属性与局部变量映射起来
        return (
            <div>
                <h1>我的代办清单</h1>
                <h3>Hello，{ name }，你有{ todoCount }项代办未处理</h3>
            </div>
        )
    }
}

export default TODOHeader;
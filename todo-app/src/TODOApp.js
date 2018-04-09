/**
 * 功能点1: 选中状态变更
 * 逻辑: 
 * 1. 点击按钮，触发TODOItem中的onChange函数
 * 2. 打勾
 * 3. 待办数量变化
 * 
 * 状态机：当状态机变量的值发生变化，会刷新UI
 */


import React, { Component } from 'react';
import TODOHeader from './TODOHeader';
import TODOInput from './TODOInput';
import TODOList from './TODOList';

//  模拟网络获取到的外部数据
//  需要todoCount根据checked的状态动态显示

class TODOApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 100,
                    title: "末世歌者",
                    checked: true
                },
                {
                    id: 101,
                    title: "小棋童",
                    checked: false
                },
                {
                    id: 102,
                    title: "马步谣",
                    checked: false
                },
                {
                    id: 103,
                    title: "藏",
                    checked: false
                }
            ]
        }
    }

    render() {

        const { todos } = this.state;
        //  过滤外部数据，计算待办事项数
        //  等价写法
        let todoCount = todos.filter((object) => !object.checked).length;

        return (
            <div>
                <TODOHeader name="双笙子" todoCount={ todoCount }/>
                <TODOInput />
                <TODOList items={ todos }/>
            </div>
        )
    }
}

export default TODOApp;
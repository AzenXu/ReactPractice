/**
 * 功能点1: 选中状态变更
 * 逻辑: 
 * 1. 点击按钮，触发TODOItem中的onChange函数
 * 2. 打勾
 * 3. 待办数量变化
 * 
 * 状态机：当状态机变量的值发生变化，会刷新UI
 * 
 * 思路：点击按钮的时候，想办法修改state中的todos中对应id的objedc的checked值
 * 把点击了的东东的ID，传出来，传到TODOApp中，就能知道应该修改哪个item的checked值了。
 */


import React, { Component } from 'react';
import TODOHeader from './TODOHeader';
import TODOInput from './TODOInput';
import TODOList from './TODOList';

let _toggleItemList = (todos, ID) => {
    let target = todos.find((item) => item.id === ID);
    target.checked = !target.checked;
    return todos;
}

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

        //  状态机刷新之后，会重新计算todoCount
        let todoCount = todos.filter((object) => !object.checked).length;

        return (
            <div>
                <TODOHeader name="双笙子" todoCount={ todoCount }/>
                <TODOInput />
                <TODOList items={ todos } toggleItemList={(ID) => {
                    console.log(ID);
                    this.setState(() => {
                        return {
                            todos: _toggleItemList(todos, ID) // 通过自定义函数修改todos并返回
                        }
                    });
                }}/>
            </div>
        )
    }
}

export default TODOApp;
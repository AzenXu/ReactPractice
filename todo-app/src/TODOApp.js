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
 * 
 * 下一步：更仿真的模拟网络请求数据 - 存入json文件中 - json文件只能放在public中，否则读不到
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

let _deleteItemList = (todos, ID) => {
    let idx = todos.findIndex((item) => item.id === ID); // 找到索引
    todos.splice(idx,1);
    return todos;
}

let _createItem = (todos, title) => {
    let lastID = todos.length > 0 ? todos[todos.length - 1].id : 100;
    let newitem = {
        id:lastID + 1,
        title: title,
        checked: false
    }
    todos.push(newitem);
    return todos;
}

class TODOApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    render() {

        const { todos } = this.state;

        //  状态机刷新之后，会重新计算todoCount
        let todoCount = todos.filter((object) => !object.checked).length;

        return (
            <div>
                <TODOHeader name="双笙子" todoCount={ todoCount }/>
                <TODOInput autoFocus={true} onKeyDown={(event)=>{
                    if (event.keyCode === 13 && event.target.value.length > 0) { // 按下enter键键
                        console.log(event.target.value); // 打印框中内容
                        this.setState({
                            todos: _createItem(todos, event.target.value)
                        })
                        event.target.value = ""; // 清空输入框
                    }
                }}/>
                <TODOList items={ todos } toggleItemList={(ID) => {
                    console.log(ID);
                    this.setState(() => {
                        return {
                            todos: _toggleItemList(todos, ID) // 通过自定义函数修改todos并返回
                        }
                    });
                }} deleteItemList={(ID)=>{
                    console.log(ID+"删除");
                    this.setState(() => {
                        return {
                            todos: _deleteItemList(todos, ID) // 通过自定义函数修改todos并返回
                        }
                    });
                }}/>
            </div>
        )
    }
}

export default TODOApp;
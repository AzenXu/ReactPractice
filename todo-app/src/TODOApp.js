import React, { Component } from 'react';
import TODOHeader from './TODOHeader';
import TODOInput from './TODOInput';
import TODOList from './TODOList';

//  模拟网络获取到的外部数据
//  需要todoCount根据checked的状态动态显示
let todos = [
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
        id: 102,
        title: "藏",
        checked: false
    }
]

class TODOApp extends Component {
    render() {

        //  过滤外部数据，计算待办事项数
        // let todoCount = todos.filter((object) => {
        //     return !object.checked;
        // }).length;

        //  等价写法
        let todoCount = todos.filter((object) => !object.checked).length;

        return (
            <div>
                <TODOHeader name="双笙子" todoCount={ todoCount }/>
                <TODOInput />
                <TODOList />
            </div>
        )
    }
}

export default TODOApp;
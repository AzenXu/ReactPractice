import React, { Component } from 'react';
import TODOHeader from './TODOHeader';
import TODOInput from './TODOInput';
import TODOList from './TODOList';

//  模拟网络获取到的外部数据
let todos = [
    {
        id: 100,
        title: "末世歌者",
        checked: false
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
        return (
            <div>
                <TODOHeader name="双笙子" todoCount={ 88 }/>
                <TODOInput />
                <TODOList />
            </div>
        )
    }
}

export default TODOApp;
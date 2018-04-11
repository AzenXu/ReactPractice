import React, { Component } from 'react';
import TODOList from './TODOList';
import TODOAction from '../Action/TODOAction';

import { connect } from 'react-redux'; // connect这个东东用来做串联

class TODOListContainer extends Component {

    render() {

        const { todosss, toggleItemProp, deleteItemProp } = this.props;

        return <TODOList 
            items={ todosss }
            toggleItemList={toggleItemProp}
            deleteItemList={deleteItemProp} />
    }
}

//  使用connect函数关联Action 和 View组件
// connect是一个函数，函数中有两个参数：
export default connect(
    // todosss: 就是render里声明的todosss.
    // state: 可以看成reducer中的index.js中的rootReducer
    // 因为处理数据的逻辑，来自于rootReducer中的todos，故这里关联 todosss: state.todos
    // 这样就实现了，一个View对应一个reducer
    // 一旦reducer中return了一个新数据出来，和它关联的view就会刷新
    (state) => ({todosss: state.todos}),
    {
        //  这里是为了将Action和View关联起来
        toggleItemProp: TODOAction.toggleItemList,
        deleteItemProp: TODOAction.deleteItem
    }
)(TODOListContainer);
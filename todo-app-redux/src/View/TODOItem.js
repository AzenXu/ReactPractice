import React, { Component } from 'react';
import propTypes from 'prop-types';

class TODOItem extends Component {

    static get defaultProps() {
        return {
            title: "We Don`t talk animal",
            isChecked: true,
            id: 0,
            toggleItem: () => { }, // 添加一个回调函数, 通过调用回调函数，让外界拿到点击到的元素的id
            deleteItem: () => { } // 添加一个回调函数, 通过调用回调函数，让外界拿到点击到的元素的id
        }
    }

    static propTypes = {
        title: propTypes.string.isRequired,
        isChecked: propTypes.bool.isRequired,
        toggleItem: propTypes.func.isRequired,
        deleteItem: propTypes.func.isRequired
    }

    render() {

        var { isChecked, title, toggleItem, id, deleteItem, ...other } = this.props;

        return (
            <li>
                <input type="checkbox" checked={this.props.isChecked} onChange={() => {
                    toggleItem(id)
                }} {...other}/>
                <span> { this.props.title } </span>
                <button onClick={() => {
                    deleteItem(id);
                }}>x</button>
            </li>
        )
    }
}

export default TODOItem;
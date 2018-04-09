import React, { Component } from 'react';
import propTypes from 'prop-types';

class TODOItem extends Component {

    static get defaultProps() {
        return {
            title: "We Don`t talk animal",
            isChecked: true,
            id: 0,
            toggleItem: () => {} // 添加一个回调函数, 通过调用回调函数，让外界拿到点击到的元素的id
        }
    }

    static propTypes = {
        title: propTypes.string.isRequired,
        isChecked: propTypes.bool.isRequired,
        toggleItem: propTypes.func.isRequired
    }

    render() {

        var { isChecked, title, toggleItem, id, ...other } = this.props;

        return (
            <li>
                <input type="checkbox" checked={this.props.isChecked} onChange={() => {
                    toggleItem(id) // 把id传给外界 - key就是id，外面传进来的
                    //  通过view拿到点击事件
                    console.log("变了变了");
                }} {...other}/>
                <span> { this.props.title } </span>
                <button>x</button>
            </li>
        )
    }
}

export default TODOItem;
import React, { Component } from 'react';
import propTypes from 'prop-types';

class TODOItem extends Component {

    static get defaultProps() {
        return {
            title: "We Don`t talk animal",
            isChecked: true
        }
    }

    static propTypes = {
        title: propTypes.string.isRequired,
        isChecked: propTypes.bool.isRequired
    }

    render() {

        var { isChecked, title, ...other } = this.props;

        return (
            <li>
                <input type="checkbox" checked={this.props.isChecked} onChange={() => {
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
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
        return (
            <li>
                <input type="checkbox" checked={this.props.isChecked} onChange={() => {
                    console.log("变了变了");
                }} />
                <span> { this.props.title } </span>
                <button>x</button>
            </li>
        )
    }
}

export default TODOItem;
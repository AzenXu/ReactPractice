import React, { Component } from 'react';

class TODOList extends Component {
    render() {
        return (
            <ul>
                <li>
                    <input type="checkbox"/>
                    <span>第1条</span>
                    <button>x</button>
                </li>
                <li>
                    <input type="checkbox" />
                    <span>第2条</span>
                    <button>x</button>
                </li>
                <li>
                    <input type="checkbox" />
                    <span>第3条</span>
                    <button>x</button>
                </li>
            </ul>
        )
    }
}

export default TODOList;
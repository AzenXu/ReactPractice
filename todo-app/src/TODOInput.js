import React, { Component } from 'react';
import propTypes from 'prop-types';

class TODOInput extends Component {

    static get defaultProps() {
        return {
            type: "text",
            style: { width: 200, height: 30, marginBottom: 30 },
            placeholder: "请输入准备录制的声音"
        }
    }

    // object类型，就是JS中的字典
    static propTypes = {
        type: propTypes.string.isRequired,
        style: propTypes.object.isRequired,
        placeholder: propTypes.string.isRequired
    }

    render() {
        return (
            <input {...this.props}/>
        )
    }
}

export default TODOInput;
import React, { Component } from 'react';
import propTypes from 'prop-types';

class TODOInput extends Component {

    static get defaultProps() {
        return {
            type: "text",
            style: { width: 200, height: 30, marginBottom: 30 },
            placeholder: "请输入准备录制的声音",
            autoFocus: false,
            onKeyDown: () => {}
        }
    }

    static propTypes = {
        type: propTypes.string.isRequired,
        style: propTypes.object.isRequired,
        placeholder: propTypes.string.isRequired,
        autoFocus: propTypes.bool.isRequired,
        onKeyDown: propTypes.func.isRequired
    }

    render() {
        return (
            <input {...this.props}/>
        )
    }
}

export default TODOInput;
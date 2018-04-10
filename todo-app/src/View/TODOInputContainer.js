import React, { Component } from 'react';
import TODOInput from './TODOInput';
import TODOAction from '../Action/TODOAction'

class TODOInputContainer extends Component {

    render() {
        return <TODOInput autoFocus={true} onKeyDown={(event) => {
            if (event.keyCode === 13 && event.target.value.length > 0) { // 按下enter键键
                TODOAction.createItem(event.target.value);
                event.target.value = "";
            }
        }} />;
    }
}

export default TODOInputContainer;
import React, { Component } from 'react';
import TODOInput from './TODOInput';
import TODOAction from '../Action/TODOAction'

class TODOInputContainer extends Component {
    
    render() {

        const {
            createItem
        } = this.props // 所有要调用的方法，都来从props中取，不直接调Action了

        return <TODOInput autoFocus={true} onKeyDown={(event) => {
            if (event.keyCode === 13 && event.target.value.length > 0) { // 按下enter键键
                createItem(event.target.value);
                event.target.value = "";
            }
        }} />;
    }
}

export default TODOInputContainer;
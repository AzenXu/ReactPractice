import React, { Component } from 'react';
import TODOInput from './TODOInput';
import TODOAction from '../Action/TODOAction'
import { connect } from 'react-redux';

class TODOInputContainer extends Component {
    
    render() {

        const {
            createItemProp
        } = this.props // 所有要调用的方法，都来从props中取，不直接调Action了

        return <TODOInput autoFocus={true} onKeyDown={(event) => {
            if (event.keyCode === 13 && event.target.value.length > 0) { // 按下enter键键
                createItemProp(event.target.value);
                event.target.value = "";
            }
        }} />;
    }
}

//  没属性，只有方法的串联
export default connect(
    undefined,
    {
        createItemProp: TODOAction.createItem
    }
)(TODOInputContainer);
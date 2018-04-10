import React, { Component } from 'react';
import TODOInput from './TODOInput';
import TODOStore from '../Store/TODOStore'
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

    componentDidMount() {
        this.removeObserver = TODOStore.addObserver(() => {
            this.setState({
                todos: TODOStore.getTodos()
            });
        });
    }

    componentWillUnmount() {
        this.removeObserver();
    }
}

export default TODOInputContainer;
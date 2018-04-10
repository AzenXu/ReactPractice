import React, { Component } from 'react';
import TODOHeader from './TODOHeader';
import TODOStore from '../Store/TODOStore'

class TODOHeaderContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: TODOStore.getTodos()
        }
    }

    render() {

        const { todos } = this.state;
        let todoCount = todos.filter((object) => !object.checked).length;

        return <TODOHeader name="双笙子" todoCount={todoCount} />;
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

export default TODOHeaderContainer;
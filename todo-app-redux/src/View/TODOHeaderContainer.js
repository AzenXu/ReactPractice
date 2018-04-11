import React, { Component } from 'react';
import TODOHeader from './TODOHeader';
import { connect } from 'react-redux';

class TODOHeaderContainer extends Component {

    render() {

        const { todos } = this.props;
        let todoCount = todos.filter((object) => !object.checked).length;

        return <TODOHeader name="双笙子" todoCount={todoCount} />;
    }
}

export default connect(
    (state) => ({ todos: state.todos })
)(TODOHeaderContainer);
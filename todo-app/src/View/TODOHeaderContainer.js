/**
 * 目前自己写的Container的问题：重复代码太多
 * flux util
 */

import React, { Component } from 'react';
import TODOHeader from './TODOHeader';
import TODOStore from '../Store/TODOStore'
import { Container } from 'flux/utils'

class TODOHeaderContainer extends Component {

    static getStores() {
        return [TODOStore]; 
    } 
    
    static calculateState(prevState) {
        return { 
             todos: TODOStore.getState(), 
        }; 
    }

    render() {

        const { todos } = this.state;
        let todoCount = todos.filter((object) => !object.checked).length;

        return <TODOHeader name="双笙子" todoCount={todoCount} />;
    }
}

export default Container.create(TODOHeaderContainer);
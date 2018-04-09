import React, { Component } from 'react';
import TODOHeader from './TODOHeader';
import TODOInput from './TODOInput';
import TODOList from './TODOList';

let todos = [
    
]

class TODOApp extends Component {
    render() {
        return (
            <div>
                <TODOHeader name="双笙子" todoCount={ 88 }/>
                <TODOInput />
                <TODOList />
            </div>
        )
    }
}

export default TODOApp;
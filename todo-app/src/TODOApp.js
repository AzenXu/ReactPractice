import React, { Component } from 'react';
import TODOHeader from './TODOHeader';
import TODOInput from './TODOInput';
import TODOList from './TODOList';

class TODOApp extends Component {
    render() {
        return (
            <div>
                <TODOHeader />
                <TODOInput />
                <TODOList />
            </div>
        )
    }
}

export default TODOApp;
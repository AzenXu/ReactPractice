/**
 * 优化：使用Flux Utils进行进一步优化
 */


import React, { Component } from 'react';
import TODOHeaderContainer from './TODOHeaderContainer';
import TODOInputContainer from './TODOInputContainer';
import TODOListContainer from './TODOListContainer';

import TODOAction from '../Action/TODOAction'

class TODOApp extends Component {

    componentDidMount() {
        TODOAction.loadData();
    }

    render() {
        return (
            <div>
                <TODOHeaderContainer />
                <TODOInputContainer />
                <TODOListContainer />
            </div>
        )
    }
}

export default TODOApp;
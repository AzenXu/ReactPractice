import React, { Component } from 'react';
import TODOHeaderContainer from './TODOHeaderContainer';
import TODOInputContainer from './TODOInputContainer';
import TODOListContainer from './TODOListContainer';
import TODOAction from '../Action/TODOAction';

import { connect } from 'react-redux';

class TODOApp extends Component {

    componentDidMount() {
        this.props.loadData();
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

// export default TODOApp;
export default connect(
    undefined,
    {
        loadData: TODOAction.loadData
    }
)(TODOApp);
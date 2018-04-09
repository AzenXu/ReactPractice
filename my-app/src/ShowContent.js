import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowContent extends Component {

    static get defaultProps() {
        return {
            content: ""
        }
    }

    static propTypes = {
        content: PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
                { this.props.content }
            </div>
        )
    }
}

export default ShowContent;
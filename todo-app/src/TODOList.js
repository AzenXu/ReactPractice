import React, { Component } from 'react';
import TODOItem from './TODOItem';
import propTypes from 'prop-types';

class TODOList extends Component {

    static get defaultProps () {
        return {
            items: []
        }
    }

    static propTypes = {
        items: propTypes.array.isRequired
    }


    render() {
        return (
            <ul>
                { this.props.items.map( (item)=> {
                    return <TODOItem title={item.title} isChecked={item.checked} />
                }) }
            </ul>
        )
    }
}

export default TODOList;
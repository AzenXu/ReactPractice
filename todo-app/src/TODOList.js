import React, { Component } from 'react';
import TODOItem from './TODOItem'

class TODOList extends Component {
    render() {
        return (
            <ul>
                <TODOItem title="末世歌者" isChecked={false}/>
                <TODOItem />
                <TODOItem />
            </ul>
        )
    }
}

export default TODOList;
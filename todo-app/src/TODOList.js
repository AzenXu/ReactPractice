import React, { Component } from 'react';
import TODOItem from './TODOItem'

class TODOList extends Component {
    render() {
        return (
            <ul>
                <TODOItem title="末世歌者" isChecked={false}/>
                <TODOItem title="小棋童" isChecked={true}/>
                <TODOItem title="马步谣" isChecked={false}/>
                <TODOItem title="藏" isChecked={false} />
            </ul>
        )
    }
}

export default TODOList;
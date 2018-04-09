import React, { Component } from 'react';

class TODOInput extends Component {
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    style={{width:200, height:30, marginBottom:30}} 
                    placeholder="请输入代办内容"
                />
            </div>
        )
    }
}

export default TODOInput;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ShowContent from './ShowContent';

class ShowEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textValue: "请输入内容...",
        }
    }

    changeTextValue = () => {
        // 获取testarea的值
        let value = ReactDOM.findDOMNode(this.refs.textarea).value
        console.log(value);
        // 修改状态机变量的值
        // this.setState(()=>{
        //     return {textValue:value}
        // });
        this.setState({textValue:value})
    }


    render() {
        return (
            <div>
                <h1>输入</h1>
                {/* 通过ref标识获取这个testarea对象 */}
                <textarea ref="textarea" style={{width: 300, height: 100}}
                        defaultValue={ this.state.textValue }
                        onChange={ this.changeTextValue }
                />
                <h1>输出</h1>
                <ShowContent content={ this.state.textValue }/>
                <h1>注释</h1>
                <ShowContent content={ "这行字符串就不会变" } />
            </div>
        );
    }
}

export default ShowEditor;
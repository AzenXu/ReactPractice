import React from 'react';
import PropTypes from 'prop-types';

class Person extends React.Component {

    static get defaultProps() {  // 定义属性默认值 - 增强可读性，类似于声明属性
        return {
            name: "小黑鼬"
        }
    }

    static propTypes = {
        name: PropTypes.string.isRequired, // 如果类型不匹配，会在console中报警告
        tel: PropTypes.string.isRequired
    }

    render() {

        const {
            tel
        } = this.props;

        return <div>
            <h1>{this.props.name}</h1>
            <h1>{tel}</h1>
        </div>
    }
}

export default Person
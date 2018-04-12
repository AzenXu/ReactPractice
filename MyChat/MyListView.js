import React, { Component } from 'react';
import {
    View,
    ListView,
    Text
} from 'react-native';

export default class MyListView extends Component {

    constructor (props, context) {
        super(props, context)
        let ds = new ListView.DataSource({
            rowHasChanged:(r1,r2) => r1 != r2 // 代理方法，r1不等于r2的时候，做刷新
        });
        this.state = {
            dataSource: ds.cloneWithRows(["木木", "灰灰", "山山", "猫猫", "灰灰", "山山", "猫猫", "灰灰", "山山", "猫猫"])
        }
    }

    render() {
        return (
            <ListView 
                style={{flex:1, backgroundColor: 'green'}}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                contentContainerStyle={
                    { 
                        flexDirection: "row",
                        flexWrap:"wrap", // 允许换行
                        justifyContent:"space-around" // 沿主轴对齐方式
                    }
                } // 通过contentContainerStyle 设置排布方向
                initialListSize={5} // 限制cell个数
            />
        )
    }

    _renderRow = (rowItem, sectionID, rowID) => {
        return <Text style={
            { margin: 10, backgroundColor: 'grey', height: 40, width: 60 }
        }>{sectionID} + {rowID} + {rowItem}</Text>
    }
}
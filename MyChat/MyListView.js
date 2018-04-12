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
            dataSource:ds.cloneWithRows(["1","2","3","4"])
        }
    }

    render() {
        return (
            <ListView style={{flex:1, backgroundColor: 'green'}}
                dataSource={this.state.dataSource}
                renderRow={(rowItem)=>{ // rowItem就是dataSource里的item
                    return <Text>{rowItem}</Text>
                }}
            />
        )
    }
}
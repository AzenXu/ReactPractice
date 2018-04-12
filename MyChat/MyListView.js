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
            dataSource:ds.cloneWithRows(["木木","灰灰","山山","猫猫"])
        }
    }

    render() {
        return (
            <ListView 
                style={{flex:1, backgroundColor: 'green'}}
                dataSource={this.state.dataSource}
                // renderRow={(rowItem,sectionID,rowID) => { // rowItem就是dataSource里的item
                //     return <Text style={
                //         {marginTop:10, backgroundColor:'grey'}
                //     }>{sectionID} + {rowID} + {rowItem}</Text>
                // }}
                renderRow={this._renderRow}
                renderHeader={() => {
                    return (
                        <Text>renderHeader</Text>
                    )
                }
                }
                renderSectionHeader={() => {
                    return (
                        <Text>sectionHeader</Text>
                    )
                }}
            />
        )
    }

    _renderRow = (rowItem, sectionID, rowID) => {
        return <Text style={
            { marginTop: 10, backgroundColor: 'grey' }
        }>{sectionID} + {rowID} + {rowItem}</Text>
    }
}
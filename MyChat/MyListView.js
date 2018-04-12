import React, { Component } from 'react';
import {
    View,
    ListView,
    Text
} from 'react-native';
import jsonData from './data.json';

export default class MyListView extends Component {

    constructor (props, context) {
        super(props, context)

        let dataBlob = {
            'section1':'a',
            'section1:row1':'啊啊',
            'section2':'b',
            'section2:row1':'彬彬',
            'section2:row2':'闭包'
        }

        let sections =['section1','section2'];
        let rows =[['row1'],['row1','row2']]; // 里面数组个数，需要和section中的元素个数一致

        //  描述从dataBlob中，通过sectionID和rowID获取数据的规则
        getRowData = (dataBlob,sectionID,rowID) => {
            return dataBlob[sectionID+':'+rowID]; // 规则是和具体数据一致的
        }

        getSectionHeaderData = (dataBlob, sectionID) => {
            return dataBlob[sectionID]; // 描述从dataBlob中取section的规则
        }

        let ds = new ListView.DataSource({
            rowHasChanged:(r1,r2) => r1 != r2, // 代理方法，r1不等于r2的时候，做刷新
            sectionHeaderHasChanged:(s1, s2) => s1 != s2,
            getRowData:getRowData,
            getSectionHeaderData:getSectionHeaderData
        });
        this.state = {
            // dataSource: ds.cloneWithRows(["木木", "灰灰", "山山", "猫猫", "灰灰", "山山", "猫猫", "灰灰", "山山", "猫猫"])
            dataSource: ds.cloneWithRowsAndSections(dataBlob,sections,rows)
        }
    }

    render() {
        return (
            <ListView 
                style={{flex:1, backgroundColor: 'green'}}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
            />
        )
    }

    _renderRow = (rowItem, sectionID, rowID) => {
        return <Text style={
            { margin: 10, backgroundColor: 'grey' }
        }>{sectionID} + {rowID} + {rowItem}</Text>
    }

    componentDidMount() {
        console.log(jsonData);
        
    }
}
import React, { Component } from 'react';
import {
    View,
    ListView,
    Text
} from 'react-native';
import jsonData from './data.json';

/**ListView使用总结
 * 如果要分组的话，需要:
 * 1. 给DataSource对象传三个数据
 * 1.1. 一个数据全集对象，key是sectionID，value是非数组的对象
 * 1.2. 一个sections数组，里面放所有sectionID
 * 1.3. 一个包括所有row的二维数组，第一层元素个数和section个数相同，第二层元素个数和section中的row的个数相同
 * 2. 给DataSource对象实现两个代理方法
 * 2.1. getSectionHeaderData描述如何从dataBlob中取到sectionHeaderItem
 * 2.2. getRowData描述如何从dataBlob中取到dataBlob中通过sectionID及rowID取到rowItem
 */

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
                renderSectionHeader={(sectionHeader)=>{
                    return(
                        <Text style={{ backgroundColor: 'red'}}>{sectionHeader}</Text>
                    )
                }}
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
        let array = jsonData.data;
        let dataBlob = {};
        let sections = [];
        let rows = [];

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            sections.push('section'+index);
            let sectionDic = array[index];
            dataBlob['section'+index] = sectionDic.title;
            let rowsIDs = [];
            for (let j = 0; j < sectionDic.content.length; j++) {
                const row = array[j];
                rowsIDs.push('row'+j);
                dataBlob['section' + index + ':' + 'row' + j] = sectionDic.content[j].content
            }
            rows.push(rowsIDs)
        }
        this.setState({dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob,sections,rows)})
    }
}
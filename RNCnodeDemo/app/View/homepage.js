
import React, { Component } from 'react';
import { 
    Text,
    ListView
 } from 'react-native';
 import HomeCell from './homecell'

 export default class Homepage extends Component {

    constructor(props, context) {
        super(props, context)
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(["1","2"])
        }
    }

     render() {
         return (
             <ListView 
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
             />
         )
     }

     _renderRow = (rowData) => {
        return (
            <HomeCell 
              rowData={rowData}
            />
        )
     }
 }
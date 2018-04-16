/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  Image
} from 'react-native';

export default class App extends Component {

  constructor(props, context){
    super(props, context);

    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      dataSource: ds.cloneWithRows(["1","2","3"])
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} />
        <ListView 
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    );
  }

  _renderRow = (rowData) => {
    return(
      <View style={styles.rowStyle}>
        <Image 
          style={styles.rowImage}
          defaultSource={require('./images/placeholder.gif')}
        />
        <View style={styles.rowInfoContainer}>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#44ff66",
    flex:1
  },
  textInput: {
    backgroundColor:"yellow",
    height:45
  },
  rowStyle: {
    backgroundColor:"white",
    marginTop:2,
    height:60,
    flexDirection:'row',
  },
  rowImage: {
    width: 60,
    height: 50,
    margin:5,
    backgroundColor:'red'
  },
  rowInfoContainer: {
    flex:1,
    backgroundColor:'blue'
  }
});

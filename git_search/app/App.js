/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  Image
} from 'react-native';
import api from './Utils/Api'
import actions from './Actions/actions'

class App extends Component {

  static get defaultProps() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      results: []
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* 首字母默认不大写 */}
        <TextInput style={styles.textInput}
          autoCapitalize="none"
          onEndEditing = { 
            (e) => this.props.fetchDataWithKey(e.nativeEvent.text) 
          }
          /> 
        <ListView 
          enableEmptySections={true}
          dataSource={this.props.dataSource.cloneWithRows(this.props.results)}
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
          source={{ uri: rowData.headerImage}}
        />
        <View style={styles.rowInfoContainer}>
          <Text style={styles.rowInfoTitle}>{rowData.login}</Text>
          <Text style={styles.rowInfoDesc}>{rowData.type}</Text>
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
    backgroundColor:'blue',
    justifyContent:'space-around'
  },
  rowInfoTitle:{
    fontSize:20,
    fontWeight:'bold'
  },
  rowInfoDesc:{
    fontSize:14,
  }
});

export default connect(
  (state) => {
    return {
      results: state.search_results
    }
  },
  {
    fetchDataWithKey: actions.fetchSearchResult
  }
)(App);

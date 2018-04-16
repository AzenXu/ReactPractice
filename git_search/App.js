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
  ListView
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
          renderRow={() => {
            return <Text>Row</Text>
          }}
        />
      </View>
    );
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
  }
});

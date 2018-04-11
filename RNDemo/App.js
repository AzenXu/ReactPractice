/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={{width:100, height:100, backgroundColor: 'yellow', margin: 5}}>1</Text>
        <Text style={{ width: 100, height: 100, backgroundColor: 'yellow', margin: 5}}>2</Text>
        <Text style={{ width: 100, height: 100, backgroundColor: 'yellow', margin: 5 }}>3</Text>
        <Text style={{ width: 100, height: 100, backgroundColor: 'yellow', margin: 5 }}>4</Text>
        <Text style={{ width: 100, height: 100, backgroundColor: 'yellow', margin: 5 }}>5</Text>
        <Text style={{ width: 100, height: 100, backgroundColor: 'yellow', margin: 5 }}>6</Text>
        <Text style={{ width: 100, height: 100, backgroundColor: 'yellow', margin: 5 }}>7</Text>
        <Text style={{ width: 100, height: 100, backgroundColor: 'yellow', margin: 5 }}>8</Text>
        <Text style={{ width: 100, height: 100, backgroundColor: 'yellow', margin: 5}}>9</Text>
        <Text style={{ width: 100, height: 100, backgroundColor: 'yellow', margin: 5 }}>10</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FF5566',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
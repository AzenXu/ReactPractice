/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:'green', flex:1}}></View>
        <View style={{backgroundColor:'yellow', flex:2}}></View>
        <View style={{ backgroundColor: 'red', flex: 3 }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FF5566'
  }
});
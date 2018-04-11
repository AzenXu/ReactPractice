/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}></View>
        <View style={styles.bottomView}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'green',
    flex: 1
  },
  topView: {
    backgroundColor: 'yellow',
    flex:3
  },
  bottomView: {
    backgroundColor: 'blue',
    flex:2
  }
})
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
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} />
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

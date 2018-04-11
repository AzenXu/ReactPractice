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
        <Text style={{width:100, height:100, backgroundColor: 'green', 
        // position: 'relative', //..通过position让单一View脱离自动布局 relative: 相对布局，会占位，及时他的位置变了，他本来应该在的位置还空着
        // top: 20,
        // left: 20
        position: 'absolute', // 不会占位，他走了别的View顶上它的位置
        top: 60,
        right: 20
        }}>1</Text>
        <Text style={{ width: 100, height:100, backgroundColor: 'yellow'}}>2</Text>
        <Text style={{ width: 100, height: 100, backgroundColor: 'blue' }}>3</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});
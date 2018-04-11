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
        <Text style={{width:100, height:100, backgroundColor: 'green'}}>1</Text>
        <Text style={{ width: 100, alignSelf: 'center', backgroundColor: 'yellow'}}>2</Text>
        <Text style={{ width: 100, height: 100, backgroundColor: 'blue' }}>3</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FF5566',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'flex-start'
    // justifyContent: 'flex-end'
    // justifyContent: 'center'
    // justifyContent: 'space-between' // 等间距平分
    justifyContent: 'space-around', // 对一个元素而言左右两边间距相等
    // alignItems: 'flex-start' // 交叉轴头部对齐
    alignItems: 'flex-end' // 交叉轴尾部对齐
    // alignItems: 'stretch' // 没手动设置高度的情况下，item会沿交叉轴自动拉伸
  }
});
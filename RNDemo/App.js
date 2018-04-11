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
  Button
} from 'react-native';
import style_outer from './styles';

let Dimensions = require('Dimensions')

let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;

let style1 = {
  backgroundColor:"#FF5566",
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT
}

export default class App extends Component{
  render() {
    return (
      <View style={style1}> {/* 对象样式 */}
        <Text style={{
          backgroundColor: '#66FF33',
          color: '#110099',
          fontSize: 40
        }}> {/* 内联样式 */}
          Welcome
        </Text>
        <Text style={[
          {backgroundColor: '#559955'},
          {width:300, height:100, borderLeftWidth:30}
        ]}>
          样式拼接
        </Text>
        <Text style={styles.s1}>
          StyleSheet样式
        </Text>
        <Text style={style_outer.s1}>
          样式分离
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  s1: {
    fontSize:30
  }
})
// 样式是对象，那么就可以抽出来

//  总结：Style是个对象，也可以是个装了很多对象的数组
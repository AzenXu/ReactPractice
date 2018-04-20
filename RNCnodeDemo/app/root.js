/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  NavigatorIOS,
  StatusBar
} from 'react-native';
import Homepage from './View/homepage'

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar 
          backgroundColor='#336688'
          barStyle='light-content'
        />
        <NavigatorIOS
          style={
            { flex: 1 }
          }
          initialRoute={{
            component: Homepage,
            title: "主页",
            barTintColor: '#336688',
            titleTextColor: '#ffffff'
          }}
        />
      </View>
    );
  }
}

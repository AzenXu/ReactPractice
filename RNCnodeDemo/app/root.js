/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  NavigatorIOS
} from 'react-native';
import Homepage from './View/homepage'

export default class App extends Component {
  render() {
    return (
      <NavigatorIOS 
        style={
          {flex:1}
        }
        initialRoute={{
          component: Homepage,
          title: "主页"
        }}
      />
    );
  }
}

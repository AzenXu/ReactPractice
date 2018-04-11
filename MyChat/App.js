/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <Image 
            style={{
              width:SCREEN_WIDTH*0.5,
              height:SCREEN_WIDTH*0.5
            }}
            source={require('./tow_versionUpdate.png') }
          />
        </View>
        <View style={styles.bottomView}>
          <Text style={[styles.button_base, styles.phone_button]}>手机号登录</Text>
          <Text style={[styles.button_base, styles.regist_button]}>立即注册</Text>
          <View style={{
            position:'absolute',
            height:100,
            width:SCREEN_WIDTH,
            left:0,
            bottom:0
          }}>
            <View style={styles.login_info_view}>
              <View style={styles.line_view}>
                <View style={{height:1, flex:1, backgroundColor:'gray',marginLeft:30,marginRight:10}}></View>
                <Text>其他登录方式</Text>
                <View style={{ height: 1, flex: 1, backgroundColor: 'gray', marginLeft: 10, marginRight: 30 }}></View>
              </View>
              <View style={styles.login_icons}>
                <Image style={{ width:40, height:40, backgroundColor: 'red', borderRadius:20, marginHorizontal:10 }} />
                <Image style={{ width: 40, height: 40, backgroundColor: 'red', borderRadius: 20, marginHorizontal: 10 }} />
                <Image style={{ width: 40, height: 40, backgroundColor: 'red', borderRadius: 20, marginHorizontal: 10 }} />
                <Image style={{ width: 40, height: 40, backgroundColor: 'red', borderRadius: 20, marginHorizontal: 10 }} />
                <Image style={{ width: 40, height: 40, backgroundColor: 'red', borderRadius: 20, marginHorizontal: 10 }} />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topView: {
    flex:3,
    justifyContent:'center',
    alignItems:'center'
  },
  bottomView: {
    flex:2,
    alignItems: 'center'
  },
  button_base: {
    width: SCREEN_WIDTH * 0.5,
    height: 35,
    fontSize: 20,
    textAlign: 'center', // text控件水平居中
    lineHeight:35, // lineHeight和控件高度设为一样，即可垂直居中
    borderRadius: 5
  },
  phone_button: {
    backgroundColor: 'red',
    color: 'white'
  },
  regist_button: {
    color: 'red',
    marginTop: 10,
    borderWidth:1,
    borderColor: 'red',
    borderStyle: 'solid'
  },
  login_info_view: {

  },
  line_view:{
    height: 25,
    flexDirection:'row',
    alignItems:'center'
  },
  login_icons: {
    height: 50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  }
})
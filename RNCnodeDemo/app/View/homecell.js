
import React, { Component } from 'react';
import { 
    View,
    Text,
    Image
 } from 'react-native';

 export default class HomeCell extends Component {
     render() {
         return (
             <View style={{
                 height:80,
                 marginTop:2,
                 backgroundColor:'#ffffff',
                 flexDirection:'row'
             }}>
                <Image 
                    style={{
                        width:60,
                        height:60,
                        margin:10,
                        backgroundColor:'#99ff99'
                    }}
                />

                <View
                    style={{
                        flex:1,
                        backgroundColor:'#0000ff'
                    }}
                >

                </View>

             </View>
         )
     }
 }
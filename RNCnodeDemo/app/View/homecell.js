
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
                        justifyContent:'space-around'
                    }}
                >
                     <Text
                        style={{
                            fontSize:20,
                            fontWeight:'bold'
                        }}
                     >
                        NodeJS
                     </Text>
                     <View
                        style={{
                            height:20,
                            flexDirection:'row'
                        }}
                     >
                        <Text
                            style={{
                                color:'rgb(124,187,34)'
                            }}
                        >
                            share
                        </Text>
                        <Text
                            style={{
                                marginLeft:10
                            }}
                        >
                            888
                        </Text>

                     </View>
                </View>

             </View>
         )
     }
 }
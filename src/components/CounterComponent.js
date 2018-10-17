import React, { Component } from 'react'
import Button from 'react-native-button';
import { Text, View, Image, Alert, Platform } from 'react-native'

export default class CounterComponent extends Component {
  render() {
    return (
      <View style={{flex:1,marginTop:Platform.OS === 'ios' ? 35 : 0}}>
        <Text style={{margin:25,fontWeight:'bold',color:'blue',fontSize:20}} >
            Redux Saga Tutorials
        </Text>
        <View style={{height:50,margin:10,flexDirection:'row'}}>
            <Button
                containerStyle={{padding:10,height:50,borderRadius:10,backgroundColor:'darkviolet'}}
                style={{fontSize:18,color:'white'}}
                onPress={() =>{
                    this.props.onDecrement(1)
                }}
            >
                Decrement +
            </Button>
            <Button
                containerStyle={{padding:10,height:50,borderRadius:10,backgroundColor:'darkviolet',marginLeft:30}}
                style={{fontSize:18,color:'white'}}
                onPress={() =>{
                    this.props.onIncrement(1)
                }}
            >
                Increment +
            </Button>
        </View>
        <Text style={{margin:10,fontWeight:'bold',color:'blue',fontSize:20}} >
            Counts: {this.props.times}
        </Text>
      </View>
    )
  }
}
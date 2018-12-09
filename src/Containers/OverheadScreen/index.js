import React, { Component } from 'react'
import {StyleSheet, View, Text } from 'react-native';

export default class OverheadScreen extends Component {
  
  static navigationOptions = {
    title: "Aereos",
    headerTitleStyle :{textAlign: 'center',alignSelf:'center'}
  };
  render () {
    return (
       <View style={styles.container}>
        <Text>Aereos</Text>
       </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#ddd',
      paddingTop: 20
  }
})


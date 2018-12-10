import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import { View} from 'react-native-animatable'
import { connect } from "react-redux";

import { incrementAction, decrementAction } from "../../Actions/actionCreator"
//import * as actions from './actions';

class OverheadContainer extends Component {
  
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

const mapStateToProps = state => ({
  counterCount: state.CounterReducer.counter
});

const mapDispatchToProps = {
  incrementAction,
  decrementAction
};

//Only redux. ever
const OverheadScreen = connect(mapStateToProps, mapDispatchToProps)(OverheadContainer);

export default OverheadScreen;

var styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#ddd',
      paddingTop: 20
  }
})
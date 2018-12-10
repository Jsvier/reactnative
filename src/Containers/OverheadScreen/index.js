import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import { View} from 'react-native-animatable'
import { connect } from "react-redux";

import { getAllOverheadsAction, getAllOverheadAction } from "../../Actions/actionCreator"

class OverheadContainer extends Component {
    
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Aereos",
    headerTitleStyle :{textAlign: 'center',alignSelf:'center'}
  };

  componentDidMount() {
    console.log( this.props);
  }

  render () {
    const {
      overheads,
      overhead
    } = this.props;
    return (
       <View style={styles.container}>
        <Text>Hello</Text>

       </View>
    )
  }
}

const mapStateToProps = state => ({
  counterCount: state.CounterReducer.counter
});

const mapDispatchToProps = {
  getAllOverheadsAction,
  getAllOverheadAction
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
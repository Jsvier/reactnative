import React, { Component } from 'react'
import { StyleSheet, Text, Alert } from 'react-native'
import { View} from 'react-native-animatable'
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import * as actions from './actions';
class OverheadScreen extends Component {
  
  static propTypes = {
    overheads: PropTypes.array,
    overhead: PropTypes.array
  };

  constructor(props) {
    super(props);

    this.state = {
      displaySingleOverhead: false
    };
  }

  static navigationOptions = {
    title: "Aereos",
    headerTitleStyle :{textAlign: 'center',alignSelf:'center'}
  };

  componentDidMount() {
    this.props.loadOverheads();
    Alert.alert( this.props.overheads.toString())
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
//Reducer overhead se conecta, en la carpeta reducer
export default connect(state => ({
  overheads: state.overheads,
  overhead: state.overhead
}), actions)(OverheadScreen);

var styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#ddd',
      paddingTop: 20
  }
})
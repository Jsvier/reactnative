import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import { View} from 'react-native-animatable'
import { connect } from "react-redux";
import { login } from '../../Reducers/Actions';
class OverheadScreen extends Component {
    
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Aereos",
    headerTitleStyle :{textAlign: 'center',alignSelf:'center'}
  };

  componentDidMount() {
//    console.log( this.props);
  }

  render () {
    return (
       <View style={styles.container}>
        <Text>Hello</Text>

       </View>
    )
  }
}


function MapStateToProps(state){
	return {
		user : state.session && state.session.user ? state.session.user : false
	}
}

export default connect(MapStateToProps,{  login })(OverheadScreen);

var styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#ddd',
      paddingTop: 20
  }
})
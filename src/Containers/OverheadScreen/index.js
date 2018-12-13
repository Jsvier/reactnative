import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import { View} from 'react-native-animatable'
import { connect } from "react-redux";
import { login } from '../../Reducers/Actions';
import SearchableFlatList from '../../Components/SearchableList';

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
      <View>
        <SearchableFlatList />
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

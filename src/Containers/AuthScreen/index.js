import React, { Component } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, UIManager, Alert } from 'react-native'
import { NavigationActions } from "react-navigation";
import { Image, View } from 'react-native-animatable'
import { connect } from "react-redux";

import imgLogo from '../../Images/logo.png'
import metrics from '../../Config/metrics'
import LoginForm from './LoginForm'

//import { login } from '../../Reducers/Actions';


const IMAGE_WIDTH = metrics.DEVICE_WIDTH * 0.8

if (Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true)

export default class AuthScreen extends Component {
   
  constructor(props){
    super(props);
    this.state = {
        user      : '',
        password  : '',
        loader    : false
    }
}
  static navigationOptions = {
    title: "Login",
    headerTitleStyle :{textAlign: 'center',alignSelf:'center'}
  };
  
  navigate = () => {
    const navigateToHome = NavigationActions.navigate({
      routeName: "screenHome"
    });

    Alert.alert('hola pepe!');

    this.props.navigation.dispatch(navigateToHome);
  };

  componentWillUpdate (nextProps) {
    if (!this.props.isLoggedIn && nextProps.isLoggedIn) {
      this.hideAuthScreen()
    }
  }

  hideAuthScreen = async () => {
    await this._setVisibleForm(null);
    await this.logoImgRef.fadeOut(200);
    this.props.onLoginAnimationCompleted();
  }

  render () {
    
    const formStyle = { height: 0 }
    return (
      <View style={styles.container}>
        <Image
          animation={'bounceIn'}
          duration={60}
          delay={10}
          ref={(ref) => this.logoImgRef = ref}
          style={styles.logoImg}
          source={imgLogo}
        />
         <LoginForm
          ref={(ref) => this.formRef = ref}
          onLoginPress={this.navigate}
        />
        <KeyboardAvoidingView
          keyboardVerticalOffset={0}
          behavior={'padding'}
          style={[formStyle, styles.bottom]}
        />
      </View>
    )
  }
}

//function MapStateToProps(state){
//	return {
//		user : state.session && state.session.user ? state.session.user : false
//	}
//}

//export default connect(MapStateToProps,{  login })(AuthScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: metrics.DEVICE_WIDTH,
    height: metrics.DEVICE_HEIGHT,
    paddingTop: 24,
    backgroundColor: 'white'
  },
  logoImg: {
    flex: 1,
    height: null,
    width: IMAGE_WIDTH,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 30
  },
  bottom: {
    backgroundColor: 'white'
  }
})

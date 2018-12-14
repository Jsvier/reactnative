import React, { Component } from 'react'
import { KeyboardAvoidingView, Platform, UIManager, Alert, Keyboard } from 'react-native'
import { NavigationActions } from "react-navigation";
import { Image, View } from 'react-native-animatable'
import { connect } from "react-redux";
import imgLogo from '../../Images/logo.png'
import {authContainer, authLogoImg, authBottom} from '../../Config/styles'

import LoginForm from './LoginForm'
import { login } from '../../Reducers/Actions';


if (Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true)
class AuthScreen extends Component {
   
  constructor(props){
    super(props);
    this.state = {
        loader    : false
    }
}
  static navigationOptions = {
    title: "Ingreso del usuario de makro"
  };
  
  navigate = () => {
    const navigateToHome = NavigationActions.navigate({
      routeName: "screenHome"
    });

    Keyboard.dismiss();
    
    this.setState({ loader : true })

		this.props.login( this.formRef.state).then(() => {
      this.props.navigation.dispatch(navigateToHome);
    }).catch( (err) => {
			this.setState({ loader : false })
      Alert.alert('Error',err.message);		
		})
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
      <View style={authContainer}>
        <Image
          animation={'bounceIn'}
          duration={60}
          delay={10}
          ref={(ref) => this.logoImgRef = ref}
          style={authLogoImg}
          source={imgLogo}
        />
         <LoginForm
          ref={(ref) => this.formRef = ref}
          onLoginPress={this.navigate}
        />
        <KeyboardAvoidingView
          keyboardVerticalOffset={0}
          behavior={'padding'}
          style={[formStyle,authBottom]}
        />
      </View>
    )
  }
}

function MapStateToProps(state){
	return {
		user : state.session && state.session.user ? state.session.user : false
  }
}

export default connect(MapStateToProps,{  login })(AuthScreen);


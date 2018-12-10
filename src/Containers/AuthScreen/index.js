import React, { Component } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, UIManager } from 'react-native'
import { NavigationActions } from "react-navigation";
import { Image, View } from 'react-native-animatable'
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import imgLogo from '../../Images/logo.png'
import metrics from '../../Config/metrics'
import LoginForm from './LoginForm'

import { incrementAction, decrementAction } from "../../Actions/actionCreator"

const IMAGE_WIDTH = metrics.DEVICE_WIDTH * 0.8

if (Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true)

class AuthContainer extends Component {
  static navigationOptions = {
    title: "Login",
    headerTitleStyle :{textAlign: 'center',alignSelf:'center'}
  };
  
  navigate = () => {
    const navigateToHome = NavigationActions.navigate({
      routeName: "screenOverhead",
      params: { name: "id" }
    });
    this.props.navigation.dispatch(navigateToHome);
  };

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    isLoading: PropTypes.bool,
    login: PropTypes.func,
    onLoginAnimationCompleted: PropTypes.func // Called at the end of a successfully login animation
  }

  state = {
    visibleForm: null // Can be: null | LOGIN
  }

  componentWillUpdate (nextProps) {
    // If the user has logged up succesfully start the hide animation
    if (!this.props.isLoggedIn && nextProps.isLoggedIn) {
      this.hideAuthScreen()
    }
  }

  hideAuthScreen = async () => {
    // 1. Slide out the form container
    await this._setVisibleForm(null)
    // 2. Fade out the logo
    await this.logoImgRef.fadeOut(800)
    // 3. Tell the container (app.js) that the animation has completed
    this.props.onLoginAnimationCompleted()
  }

  onLoginPress () {
    
    Alert.alert('BUSCAR!')
  }
  
  render () {

    const { isLoading } = this.props
  
    const { visibleForm } = this.state
    // The following style is responsible of the "bounce-up from bottom" animation of the form
    // <Text>{counterCount}</Text>
    //   onPress={() => incrementAction()}
  
    const formStyle = (!visibleForm) ? { height: 0 } : { marginTop: 40 }
    return (
      <View style={styles.container}>
        <Image
          animation={'bounceIn'}
          duration={1200}
          delay={200}
          ref={(ref) => this.logoImgRef = ref}
          style={styles.logoImg}
          source={imgLogo}
        />
         <LoginForm
          ref={(ref) => this.formRef = ref}
          onLoginPress={this.navigate}
          isLoading={isLoading}
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

const mapStateToProps = state => ({
  counterCount: state.Reducer.counter
});

const mapDispatchToProps = {
  incrementAction,
  decrementAction
};

//Only redux. ever
const AuthScreen = connect(mapStateToProps, mapDispatchToProps)(AuthContainer);

export default AuthScreen;

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

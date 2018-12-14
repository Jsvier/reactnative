import React, { Component } from 'react'
import { View } from 'react-native-animatable'
import PropTypes from 'prop-types';
import CustomButton from '../../Components/CustomButton'
import CustomTextInput from '../../Components/CustomTextInput'
import {logincontainer, loginform, loginfooter}  from '../../Config/styles'

export default class LoginForm extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    onLoginPress: PropTypes.func
  }

  state = {
    password: '',
    email: ''
  }

  hideForm = async () => {
    if (this.buttonRef && this.formRef) {
      await Promise.all([
        this.buttonRef.zoomOut(200),
        this.formRef.fadeOut(300)
      ])
    }
  }

  render () {
    const { email, password } = this.state
    const { isLoading, onLoginPress } = this.props
    const isValid = email !== '' && password !== ''
    return (
      <View style={logincontainer}>
        <View style={loginform} ref={(ref) => { this.formRef = ref }}>
        <CustomTextInput
            name={'email'}
            ref={(ref) => this.userInputRef = ref}
            placeholder={'correo electronico'}
            editable={!isLoading}
            returnKeyType={'next'}
            blurOnSubmit={false}
            withRef={true}
            onSubmitEditing={() => this.passwordInputRef.focus()}
            onChangeText={(value) => this.setState({ email: value })}
            isEnabled={!isLoading}
          />
          <CustomTextInput
            name={'password'}
            ref={(ref) => this.passwordInputRef = ref}
            placeholder={'Password'}
            editable={!isLoading}
            returnKeyType={'done'}
            secureTextEntry={true}
            withRef={true}
            onChangeText={(value) => this.setState({ password: value })}
            isEnabled={!isLoading}
          />
        </View>
        <View style={loginfooter}>
          <View ref={(ref) => this.buttonRef = ref} animation={'bounceIn'} duration={600} delay={400}>
            <CustomButton
              onPress={() => onLoginPress(email, password)}
              isEnabled={isValid}
              isLoading={isLoading}
              text={'Ingreso'}
            />
          </View>
        </View>
      </View>
    )
  }
}
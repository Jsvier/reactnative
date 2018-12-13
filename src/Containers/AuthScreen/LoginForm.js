import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native-animatable'
import PropTypes from 'prop-types';
import CustomButton from '../../Components/CustomButton'
import CustomTextInput from '../../Components/CustomTextInput'
import metrics from '../../Config/metrics'
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
      <View style={styles.container}>
        <View style={styles.form} ref={(ref) => { this.formRef = ref }}>
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
        <View style={styles.footer}>
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

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.DEVICE_WIDTH * 0.1
  },
  form: {
    marginTop: 20
  },
  footer: {
    height: 100,
    justifyContent: 'center'
  }
})

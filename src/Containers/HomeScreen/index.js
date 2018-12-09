import React, { Component } from 'react'
import {StyleSheet, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import CardModal from '../../Components/card-modal';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        scroll: true,
    }
  }

  static navigationOptions = {
    title: "Menu de aplicaciones de Makro",
    headerTitleStyle :{textAlign: 'center',alignSelf:'center'}
  };
  render () {
    return (
       <View style={styles.container}>
         <ScrollView scrollEnabled={this.state.scroll} style={styles.container}>
                <CardModal title={'Aereos'}
                           description={'Sistema de agrupamiento y posicionamientos de articulos, desde rececpcion de mercaderias.'}
                           image={require('../../Images/overhead-logo.png')}
                           color='rgba(236,25,40,0.9)'
                           content={'Simple idea de pallet.'}
                           due={1}
                />
                <CardModal title={'Verificador de precio'}
                           description={'Sistema para la busqueda e impresion de articulos activos'}
                           image={require('../../Images/pricecheck-logo.png')}
                           color='rgba(236,25,40,0.9)'
                           content={'Simple idea de pricheck.'}
                           due={2}
                />
                <CardModal title={'Hipersensible/Sensibles'}
                           description={'Articulos sensible de rotacion dentro de las tiendas'}
                           image={require('../../Images/sensitive-logo.png')}
                           color='rgba(236,25,40,0.9)'
                           content={'Simple idea de pricecheck.'}
                           due={1}
                />
            </ScrollView>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#ddd',
      paddingTop: 20
  },
  box: {
      backgroundColor: 'red'
  },
  button: {
      borderColor: 1,
      borderWidth: 1,
  }
})


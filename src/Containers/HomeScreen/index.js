import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { NavigationActions } from "react-navigation";
import { View} from 'react-native-animatable'
import { connect } from "react-redux";
import { login } from '../../Reducers/Actions';
import CardModal from '../../Components/card-modal';
import {homecontainer}  from '../../Config/styles'

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        scroll: true,
    }
  }

  static navigationOptions = {
    title: "Menú de aplicaciones de Makro"
  };
   
  navigate = (route) => {
    const navigateTo= NavigationActions.navigate({
      routeName: route
    });
    
    this.props.navigation.dispatch(navigateTo);
  };

  render () {
    return (
       <View style={homecontainer}>
         <ScrollView scrollEnabled={this.state.scroll} style={homecontainer}>
                <CardModal title={'Aereos'}
                           description={'Sistema de agrupamiento y posicionamientos de artículos, desde recepción de mercaderías.'}
                           image={require('../../Images/overhead-logo.png')}
                           color='rgba(236,25,40,0.9)'
                           content={'Simple idea de pallet.'}
                           due={1}
                           onPress={() => this.navigate ("screenOverhead")}
                />
                <CardModal title={'Verificador de precio'}
                           description={'Sistema para la búsqueda e impresión de artículos activos.'}
                           image={require('../../Images/pricecheck-logo.png')}
                           color='rgba(236,25,40,0.9)'
                           content={'Simple idea de pricecheck.'}
                           due={2}
                           onPress={() => this.navigate  ("screenHome")}
                />
                <CardModal title={'Hipersensible/Sensibles'}
                           description={'Artículos sensibles de rotación dentro de las tiendas.'}
                           image={require('../../Images/sensitive-logo.png')}
                           color='rgba(236,25,40,0.9)'
                           content={'Simple idea de pricecheck.'}
                           due={1}
                           onPress={() => this.navigate  ("screenHome")}
                />
            </ScrollView>
      </View>
    )
  }
}

function MapStateToProps(state){
	return {
		user : state.session && state.session.user ? state.session.user : false
	}
}

export default connect(MapStateToProps,{  login })(HomeScreen);

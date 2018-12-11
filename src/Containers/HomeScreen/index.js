import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { NavigationActions } from "react-navigation";
import { View} from 'react-native-animatable'
import { connect } from "react-redux";
import { login } from '../../Reducers/Actions';
import CardModal from '../../Components/card-modal';
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        scroll: true,
    }
  }

  static navigationOptions = {
    title: "Menú de aplicaciones de Makro",
    headerTitleStyle :{textAlign: 'center',alignSelf:'center'}
  };

  navigate = () => {
    const navigateToOverhead = NavigationActions.navigate({
      routeName: "screenOverhead"
    });
    this.props.navigation.dispatch(navigateToOverhead);
  };

  render () {
    return (
       <View style={styles.container}>
         <ScrollView scrollEnabled={this.state.scroll} style={styles.container}>
                <CardModal title={'Aereos'}
                           description={'Sistema de agrupamiento y posicionamientos de artículos, desde recepción de mercaderías.'}
                           image={require('../../Images/overhead-logo.png')}
                           color='rgba(236,25,40,0.9)'
                           content={'Simple idea de pallet.'}
                           due={1}
                           onClick={() => this.navigate}
                />
                <CardModal title={'Verificador de precio'}
                           description={'Sistema para la búsqueda e impresión de artículos activos.'}
                           image={require('../../Images/pricecheck-logo.png')}
                           color='rgba(236,25,40,0.9)'
                           content={'Simple idea de pricecheck.'}
                           due={2}
                           onClick={() => this.navigate}
                />
                <CardModal title={'Hipersensible/Sensibles'}
                           description={'Artículos sensibles de rotación dentro de las tiendas.'}
                           image={require('../../Images/sensitive-logo.png')}
                           color='rgba(236,25,40,0.9)'
                           content={'Simple idea de pricecheck.'}
                           due={1}
                           onClick={() => this.navigate}
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

var styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#ddd',
      paddingTop: 20
  }
})


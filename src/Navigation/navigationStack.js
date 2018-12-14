import { StackNavigator } from "react-navigation";
import ScreenHome from "../Containers/HomeScreen";
import ScreenAuth from "../Containers/AuthScreen";
import ScreenOverhead from "../Containers/OverheadScreen";

const Navigation = StackNavigator({
  ScreenAuth: {
    screen: ScreenAuth
  },
  screenHome: {
    screen: ScreenHome
  },
  screenOverhead: {
    screen: ScreenOverhead
  },}, {
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'rgba(236,25,40,0.9)',
      },
      headerTitleStyle: {alignSelf: 'center'},
      headerLayoutPreset: 'center',
      headerTintColor: '#fff',
    }
  });

export default Navigation;
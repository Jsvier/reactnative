import { StackNavigator } from "react-navigation";
import ScreenHome from "../Containers/HomeScreen";
import ScreenAuth from "../Containers/AuthScreen";

const navigator = StackNavigator({
  ScreenAuth: {
    screen: ScreenAuth
  },
  screenHome: {
    screen: ScreenHome
  }
});

export default navigator;

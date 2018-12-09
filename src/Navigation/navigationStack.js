import { StackNavigator } from "react-navigation";
import ScreenHome from "../Containers/HomeScreen";
import ScreenAuth from "../Containers/AuthScreen";
import ScreenOverhead from "../Containers/OverheadScreen";

const navigator = StackNavigator({
  ScreenAuth: {
    screen: ScreenAuth
  },
  screenHome: {
    screen: ScreenHome
  },
  screenOverhead: {
    screen: ScreenOverhead
  }
});

export default navigator;

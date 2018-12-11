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
  }
});

export default Navigation;
import { combineReducers } from "redux";
import CounterReducer from "./counterReducer";
import OverheadReducer from "../Containers/OverheadScreen/reducer";
import NavigationReducer from "./navigationReducer";

const AppReducer = combineReducers({
  CounterReducer,
  OverheadReducer,
  NavigationReducer
});

export default AppReducer;


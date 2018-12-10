import { combineReducers } from "redux";
import Reducer from "./Reducer";
import NavigationReducer from "./navigationReducer";

const AppReducer = combineReducers({
  Reducer,
  NavigationReducer
});

export default AppReducer;


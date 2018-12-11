import { combineReducers } from "redux";
import NavigationReducer from "./navigationReducer";
import session from './session';

const AppReducer = combineReducers({
  NavigationReducer,
  session
});

export default AppReducer;


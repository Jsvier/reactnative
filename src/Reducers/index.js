import { combineReducers } from "redux";
import Reducer from "./Reducer";
import NavigationReducer from "./navigationReducer";
import session from './session';

const AppReducer = combineReducers({
  Reducer,
  NavigationReducer,
  session
});

export default AppReducer;


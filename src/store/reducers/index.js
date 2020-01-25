import { combineReducers } from "redux";
import { counter } from "./count";
import { info } from "./info";

// Using combine reducers to break up reducers into different files
export default combineReducers({
  counter,
  info
});

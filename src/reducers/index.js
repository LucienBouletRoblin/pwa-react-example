import { combineReducers } from "redux";
import Home from "modules/home/ducks/home";
import Ui from "modules/common/ducks/ui";

export default combineReducers({
  Ui,
  Home
});

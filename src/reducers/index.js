import { combineReducers } from "redux";
import shows from "./searchReducers";


export default combineReducers({
  shows: shows,
});
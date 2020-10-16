import { combineReducers } from "redux";
import authReducer from "./searchReducers";
import showSidebarReducer from "./showSidebarReducer"

export default combineReducers({
  auth: authReducer,
  showSidebar: showSidebarReducer
});
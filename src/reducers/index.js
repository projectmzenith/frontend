import { combineReducers } from "redux";
import announcementReducer from "./announcementReducer";
import eventReducer from "./eventReducer";
//import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  Announcements: announcementReducer,
  Events: eventReducer
});

import {combineReducers} from 'redux';
import announcementReducer from './announcementReducer'
//import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  Announcements: announcementReducer,
});

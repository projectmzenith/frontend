import {
  ADD_ANNOUNCEMENT,
  EDIT_ANNOUNCEMENT,
  FETCH_ANNOUNCEMENTS,
  DELETE_ANNOUNCEMENT,
  UPDATE_LIKE_COUNTER
} from "../actions/types";
import _ from "lodash";

const INITIAL_STATE = {
  AnnouncementList: [
    {
      body: null,
      createdAt: null,
      header: null,
      id: null,
      likes: 0,
      userId: null
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ANNOUNCEMENTS:
      return { ...state, AnnouncementList: action.payload.reverse() };
    case ADD_ANNOUNCEMENT:
      let newcount = state.Count + action.payload;
      return { ...state, Count: newcount };
    case DELETE_ANNOUNCEMENT:
      return _.omit(state, action.payload);
    case UPDATE_LIKE_COUNTER:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

// console.log(action.payload[0].createdAt)
// var date = new Date(action.payload[0].createdAt)
// console.log(date.toString(date))
// console.log(date.toLocaleString('default', { month: 'long' }))
// console.log(date.getDate())
// console.log(date.getUTCFullYear())
// console.log(date.getHours()-12)

import { FETCH_EVENTS, ON_LOGOUT } from "../actions/types";
import _ from "lodash";

const INITIAL_STATE = {
  EventList: [
    {
      ID: null,
      CreatedAt: null,
      UpdatedAt: null,
      DeletedAt: null,
      CreatorId: null,
      EventTitle: null,
      EventDescription: null,
      EventTime: null,
      EventLocation: null,
      EventType: null,
      ServiceType: null,
      ChairId: null,
      CoChairId: null,
      Host: null,
      Cap: null,
      Participants: null,
      AnnouncementId: null,
      Likes: 0
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return { ...state, AnnouncementList: action.payload.reverse() };
    case ON_LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

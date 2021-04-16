import {ADD_ANNOUNCEMENT,EDIT_ANNOUNCEMENT,FETCH_ANNOUNCEMENTS,DELETE_ANNOUNCEMENT} from '../actions/types';
import _ from 'lodash'

const INITIAL_STATE={
  Count:0
};

export default (state=INITIAL_STATE, action)=>{
  switch(action.type){
    case ADD_ANNOUNCEMENT:
     let newcount =state.Count + action.payload;
     return {Count:newcount};
    case DELETE_ANNOUNCEMENT:
     return _.omit(state, action.payload);
    default:
      return state;
  }
}

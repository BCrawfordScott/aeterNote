
import {
  RECEIVE_TAG,
  RECEIVE_TAGS,
  REMOVE_TAG
} from '../actions/tag_actions';
import { LOGOUT } from '../actions/session_actions';

const tagsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({} , state);
  switch(action.type){
    case(RECEIVE_TAGS):
      return action.tags;
    case(RECEIVE_TAG):
      return Object.assign(newState, { [action.tag.id]: action.tag });
    case(REMOVE_TAG):
      delete newState[action.tagId];
      return newState;
    case(LOGOUT):
      return {};
    default:
      return newState;
  }
};

export default tagsReducer;

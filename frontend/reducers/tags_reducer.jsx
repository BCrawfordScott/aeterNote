
import {
  RECEIVE_TAG,
  RECEIVE_TAGS,
  REMOVE_TAG
} from '../actions/note_actions';

const tagsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({} , newState);
  switch(action.type) {
    case(RECEIVE_TAGS):
      return action.tags;
    case(RECEIVE_TAG):
      return Object.assign(newState, { [action.tag.id]: action.tag });
    case(REMOVE_TAG):
      delete newState[action.tagId];
      return newState;
    default:
      return newState;
  }
};

export default tagsReducer;

import {
  RECEIVE_NOTEBOOK,
  RECEIVE_NOTEBOOKS,
  REMOVE_NOTEBOOK
} from '../actions/notebook_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullNotebooks = {};

const notebookReducer = (state = _nullNotebooks, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type){
    case(RECEIVE_NOTEBOOKS):
      return action.notebooks;
    case(RECEIVE_NOTEBOOK):
      return Object.assign(newState, { [action.notebook.id]: action.notebook });
    case(REMOVE_NOTEBOOK):
      delete newState[action.notebookId];
      return newState;
    // case(RECEIVE_CURRENT_USER):
    //   return action.notebooks;
    default:
      return newState;
  }
};

export default notebookReducer;

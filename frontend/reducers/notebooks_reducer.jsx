import {
  RECEIVE_NOTEBOOK,
  RECEIVE_NOTEBOOKS,
  REMOVE_NOTEBOOK
} from '../actions/notebook_actions';

const _nullNotebooks = {};

const notebookReducer = (state = _nullNotebooks, action) => {
  let newState = Object.freeze(state);
  switch(action.type){
    case(RECEIVE_NOTEBOOKS):
      return action.notebooks;
    case(RECEIVE_NOTEBOOK):
      return Object.assign(newState, { [action.notebook.id]: action.notebook });
    case(REMOVE_NOTEBOOK):
      delete newState[action.notebookId];
      return newState;
    default:
      return newState;
  }
};

export default notebookReducer;

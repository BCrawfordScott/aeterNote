import RECEIVE_NOTE_ERRORS from '../actions/note_actions';


const notesErrorReducer = (state = [], action) => {

  Object.freeze(state);
  let newState = Object.assign({}, newState);
  switch(action.type){
    case(RECEIVE_NOTE_ERRORS):
      return action.errors;
    default:
      return newState;
  }
};

export default notesErrorReducer;

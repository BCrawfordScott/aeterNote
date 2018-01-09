import RECEIVE_NOTE_ERRORS from '../actions/note_actions';


const notesErrorReducer = (state = [], action) => {

  Object.freeze(state);
  switch(action.type){
    case(RECEIVE_NOTE_ERRORS):
      return action.errors;
    default:
      return state;
  }
};

export default notesErrorReducer;

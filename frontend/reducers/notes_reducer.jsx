import { RECEIVE_NOTES }from '../actions/note_actions';

const _nullNotes = {};

const notesReducer = (state = _nullNotes, action) => {

  Object.freeze(state);
  let newState = Object.assign({}, newState);
  switch(action.type){
    case(RECEIVE_NOTES):
    console.log(action.notes);
      return action.notes;
    default:
      return state;
  }
};

export default notesReducer;

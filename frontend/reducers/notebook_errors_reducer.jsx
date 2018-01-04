import { RECEIVE_NOTEBOOK_ERRORS,
  REMOVE_ERRORS,
  RECEIVE_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK
} from '../actions/notebook_actions';

const notebookErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case(RECEIVE_NOTEBOOK_ERRORS):
      return action.errors;
    case(RECEIVE_NOTEBOOK, RECEIVE_NOTEBOOKS, REMOVE_NOTEBOOK, REMOVE_ERRORS):
      return [];
    default:
      return state;
  }
};

export default notebookErrorsReducer;

import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import notebooksReducer from './notebooks_reducer';
import errorsReducer from './errors_reducer';

export default combineReducers(
  {
    session: sessionReducer,
    notebooks: notebooksReducer,
    errors: errorsReducer
  }
);

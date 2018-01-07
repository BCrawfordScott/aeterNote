import {
  UPDATE_NOTEBOOK_TAB,
  UPDATE_NOTEBOOK_FORM_MODAL,
  UPDATE_NOTEBOOK_SELECTED,
  UPDATE_SORT_OPTIONS,
  UPDATE_EDIT_NOTEBOOK
  } from '../actions/ui_actions';

const _defaultUi = {
  loading: false,
  fullpage_note: false,
  notebook_tab: false,
  tag_tab: false,
  notebook_form_modal: false,
  notebook_selected: false,
  sort_options: false,
  edit_notebook: false
};

const uiReducer = (state = _defaultUi, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type){
    case(UPDATE_NOTEBOOK_TAB):
      return Object.assign(newState, { notebook_tab: !(newState.notebook_tab) });
    case(UPDATE_NOTEBOOK_FORM_MODAL):
      return Object.assign(newState, { notebook_form_modal: !(newState.notebook_form_modal) });
    case(UPDATE_NOTEBOOK_SELECTED):
      Object.assign(newState, { current_notebook: action.notebookId });
      Object.assign(newState, { notebook_selected: Boolean(newState.current_notebook) });
      Object.assign(newState, { notebook_tab: !(newState.notebook_tab) });
      return newState;
    case(UPDATE_SORT_OPTIONS):
      return Object.assign(newState, { sort_options: !(newState.sort_options) });
    case(UPDATE_EDIT_NOTEBOOK):
      return Object.assign(newState, { edit_notebook: !(newState.edit_notebook) });
    default:
      return state;
  }
};

export default uiReducer;

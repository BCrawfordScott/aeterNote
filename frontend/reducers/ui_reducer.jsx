import {
  UPDATE_NOTEBOOK_TAB,
  UPDATE_NOTEBOOK_FORM_MODAL
  } from '../actions/ui_actions';

const _defaultUi = {
  loading: false,
  fullpage_note: false,
  notebook_tab: false,
  tag_tab: false,
  notebook_form_modal: false
};

const uiReducer = (state = _defaultUi, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type){
    case(UPDATE_NOTEBOOK_TAB):
      return Object.assign(newState, { notebook_tab: !(newState.notebook_tab) });
    case(UPDATE_NOTEBOOK_FORM_MODAL):
      return Object.assign(newState, { notebook_form_modal: !(newState.notebook_form_modal) });
    default:
      return state;
  }
};

export default uiReducer;

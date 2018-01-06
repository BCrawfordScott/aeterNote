export const UPDATE_NOTEBOOK_TAB = 'UPDATE_NOTEBOOK_TAB';
export const UPDATE_NOTEBOOK_FORM_MODAL = 'UPDATE_NOTEBOOK_FORM_MODAL';
export const UPDATE_NOTEBOOK_SELECTED = 'UPDATE_NOTEBOOK_SELECTED';

export const updateNotebookTab = () => {
  return {
    type: UPDATE_NOTEBOOK_TAB
  };
};

export const updateNotebookFormModal = () => {
  return {
    type: UPDATE_NOTEBOOK_FORM_MODAL
  };
};

export const updateNotebookSelected = notebookId => {
  return {
    type: UPDATE_NOTEBOOK_SELECTED,
    notebookId
  };
};

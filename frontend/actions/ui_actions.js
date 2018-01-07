export const UPDATE_NOTEBOOK_TAB = 'UPDATE_NOTEBOOK_TAB';
export const UPDATE_NOTEBOOK_FORM_MODAL = 'UPDATE_NOTEBOOK_FORM_MODAL';
export const UPDATE_NOTEBOOK_SELECTED = 'UPDATE_NOTEBOOK_SELECTED';
export const UPDATE_SORT_OPTIONS = 'UPDATE_SORT_OPTIONS';
export const UPDATE_EDIT_NOTEBOOK = 'UPDATE_EDIT_NOTEBOOK';

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

export const updateSortOptions = () => {
  return {
    type: UPDATE_SORT_OPTIONS
  };
};

export const updateEditNotebook = () => {
  return {
    type: UPDATE_EDIT_NOTEBOOK
  };
};

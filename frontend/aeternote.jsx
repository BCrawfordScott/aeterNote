import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

//TESTING//
import * as NotebookActions from './actions/notebook_actions';
window.RECEIVE_NOTEBOOK = NotebookActions.RECEIVE_NOTEBOOK;
window.RECEIVE_NOTEBOOKS = NotebookActions.RECEIVE_NOTEBOOKS;
window.REMOVE_NOTEBOOK = NotebookActions.REMOVE_NOTEBOOK;
window.RECEIVE_NOTEBOOK_ERRORS = NotebookActions.RECEIVE_NOTEBOOK_ERRORS;
window.fetchNotebook = NotebookActions.fetchNotebook;
window.fetchNotebooks = NotebookActions.fetchNotebooks;
window.createNotebook = NotebookActions.createNotebook;
window.updateNotebook = NotebookActions.updateNotebook;
window.deleteNotebook = NotebookActions.deleteNotebook;
import { logout } from './actions/session_actions';
//TESTING//

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser){
    store = configureStore({
      session: { currentUser: window.currentUser },
      notebooks: window.notebooks,
      ui: { current_notebook: Object.keys(window.notebooks)[0]}
    });
    delete window.currentUser;
    delete window.notebooks;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');

  window.getState = store.getState; //TESTING//
  window.dispatch = store.dispatch; //TESTING//

  ReactDOM.render(<Root store={ store } />, root);
});

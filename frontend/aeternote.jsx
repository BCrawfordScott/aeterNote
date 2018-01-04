import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

//TESTING//
import * as notebookAPIUtil from './util/notebook_api_util';
window.fetchNotebooks = notebookAPIUtil.fetchNotebooks;
window.fetchNotebook = notebookAPIUtil.fetchNotebook;
window.createNotebook = notebookAPIUtil.createNotebook;
window.updateNotebook = notebookAPIUtil.updateNotebook;
window.deleteNotebook = notebookAPIUtil.deleteNotebook;
//TESTING//

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser){
    store = configureStore({ session: { currentUser: window.currentUser } });
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');

  window.getState = store.getState; //TESTING//
  window.dispatch = store.dispatch; //TESTING//

  ReactDOM.render(<Root store={ store } />, root);
});

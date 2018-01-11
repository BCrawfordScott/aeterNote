import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

//TESTING//

//TESTING//

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser){
    store = configureStore({
      session: { currentUser: window.currentUser },
      notebooks: window.notebooks,
      ui: {
        current_notebook: Object.keys(window.notebooks)[0],
        notebook_tab: null
      }
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

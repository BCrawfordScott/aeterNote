import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  window.getState = store.getState; // testing
  window.dispatch = store.dispatch; // testing
  ReactDOM.render(<h1>Welcome to æterNote</h1>, root);
});

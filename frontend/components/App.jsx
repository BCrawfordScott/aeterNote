import React from 'react';
import SessionLinks from './session/session_links';
import SessionForm from './session/session_form_container';
import HomePage from './homepage.jsx';
import NoteHome from './notes/notehome';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import {
  Route,
  Link,
  Redirect,
  Switch,
  HashRouter
} from 'react-router-dom';

const App = () => (
    <div>
      <ProtectedRoute path='/notes' component={ NoteHome } />
      <AuthRoute exact path='/' component={ HomePage } />
      <AuthRoute path='/login' component={ SessionForm } />
      <AuthRoute path='/signup' component={ SessionForm } />
    </div>
  );


export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import CV from './components/CV';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={App} />
      <Route path="resume.html" component={CV} />
    </Route>
  </Router>
);

// Binding to DOM
ReactDOM.render(routes, document.getElementById('app'));

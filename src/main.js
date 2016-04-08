import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { createHistory } from 'history';

import App from './components/App';
import Home from './components/Home';
import Blog from './components/Blog';
import Portfolio from './components/Portfolio';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="blog" component={Blog} />
      <Route path="portfolio" component={Portfolio} />
    </Route>
  </Router>
);

// Binding to DOM
ReactDOM.render(routes, document.getElementById('app'));

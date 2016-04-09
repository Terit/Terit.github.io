import './vendor/jquery.fullPage.min.js';
import './vendor/jquery.easings.min.js';
import './css/jquery.fullpage.css';
import './css/style.css';

import './utils/jquery.script.js';

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

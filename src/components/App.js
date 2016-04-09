import '../vendor/jquery.fullPage.min.js';
import '../vendor/jquery.easings.min.js';
import '../css/jquery.fullpage.css';
import '../css/style.css';

import '../utils/jquery.script.js';

import React from 'react';

import Header from './Header';
import Home from './Home';
import Blog from './Blog';
import Portfolio from './Portfolio';

export default function App() {
  return (
    <div>
      <Header />
      <div id="fullpage">
        <Home />
        <Blog />
        <Portfolio />
      </div>
    </div>
  );
}

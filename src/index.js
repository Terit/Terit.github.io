import './vendor/ga-tracking.js';
import './vendor/jquery.fullPage.min.js';
import './vendor/jquery.easings.min.js';
import './utils/jquery.script.js';

import './css/App.css';
import './css/jquery.fullpage.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// Binding to DOM
ReactDOM.render(<App />, document.getElementById('app'));

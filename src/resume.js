import './vendor/ga-tracking.js';
import './css/Resume.css';

import React from 'react';
import ReactDOM from 'react-dom';

import CV from './components/CV';

// Binding to DOM
ReactDOM.render(<CV />, document.getElementById('app'));

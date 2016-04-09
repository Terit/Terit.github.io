import React from 'react';
import { Link } from 'react-router';

import Header from './Header';

export default function App({ children }) {
  return (
    <div>
      <Header />
      <div id="fullpage">
        {children}
      </div>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};

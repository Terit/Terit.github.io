import React from 'react';

import Header from './Header';
import Home from './Home';
import Blog from './Blog';
import Portfolio from './Portfolio';
import Footer from './Footer';

export default function App() {
  return (
    <div>
      <Header />
      <div id="fullpage">
        <Home />
        <Blog />
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

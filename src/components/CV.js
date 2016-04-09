import '../css/resume.css';

import { type } from '../utils/resume.js';

import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

class CV extends React.Component {
  componentDidMount() {
    setTimeout(type, 1000);
  }

  render() {
    return (
      <div>
        <LeftSection />
        <RightSection />
      </div>
    );
  }
}

export default CV;

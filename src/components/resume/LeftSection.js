import React from 'react';

import Prompt from './Prompt';
import Output from './Output';

export default function LeftSection() {
  return (
    <section id="left">
      <Prompt id="whoami" />
      <Output id="whoamiOutput">
        <p id="name">Andy Theriault</p>
        <Prompt id="contact" />
      </Output>
      <Output id="contactOutput">
        <p>role: Web developer</p>
        <p>email: <a className="play-print" href="mailto:artheriault@gmail.com">artheriault@gmail.com</a></p>
        <p>phone: 778-967-1675</p>
        <p>site: <a href="https://terit.github.io" target="_blank">terit.github.io</a></p>
        <p>linked_in: <a href="https://ca.linkedin.com/in/andytheriault" target="_blank">andy-theriault</a></p>
        <p>github: <a href="https://github.com/terit" target="_blank">Terit</a></p>
        <p>~</p>
        <hr />
        <p>:q</p>
        <p className="cli play-print">
          <span className="red">~/resume</span>
          <span className="green"> $ </span>
          <span className="print" onClick={window.print}>Click here to Print</span>
          <span className="blink"> &#9612;</span>
        </p>
      </Output>
    </section>
  );
}

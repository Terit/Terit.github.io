import React from 'react';
import { Link } from 'react-router';

export default function Header() {
  return (
    <header>
      <li id="home" className="underline">
        <Link to="/"><i className= "fa fa-home"></i>Home</Link>
      </li>
      <li id="portfolio">
        <Link to="/portfolio"><i className= "fa fa-folder"></i>Portfolio</Link>
      </li>
      <li id="resume"><Link to="/resume"><i className="fa fa-file-text"></i>Resume</Link></li>
      <li>Andy</li>
      <li>
        <img id="portrait" src="images/terit.jpg" />
        <small id="about" className="hide">
          Full stack Web Dev looking for <i className="fa fa-bug"></i> to squash.
        </small>
      </li>
      <li>Theriault</li>
      <li>
        <a href="https://www.github.com/terit" target="_blank">
          <i className="fa fa-github"></i>Github
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/andytheriault" target="_blank">
          <i className= "fa fa-linkedin-square"></i>LinkedIn
        </a>
      </li>
      <li>
        <a href="mailto:andy@terit.tech" target="_blank">
          <i className="fa fa-envelope"></i>Contact
        </a>
      </li>
    </header>
  );
}

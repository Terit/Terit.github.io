import React from 'react';

export default function Blog() {
  return (
    <div className="section" data-menuanchor="blog">
      <div className="slide">
        <div className="contents">
          <div>
            <h3>April 2016</h3>
            <p>Recently I've been playing with <a href="https://facebook.github.io/react/">ReactJS</a>. I started my journey by finding a few tutorials to pick up the basics. Doing so I realised my Javascript skills were a little rusty, working mostly in Ruby at <a href="https://mybesthelper.com/" target="_blank">myBestHelper</a> and most of our Javascript is written in <a href="https://jquery.com/">jQuery</a>. Familiarizing myself with vanilla JS allowed me to better follow along with the concepts and strength of ReactJS.</p>

            <p>Once the tutorials had done their job, I started to think about ways I could test my new skills. That led me to my favourite project I wrote at Lighthouse Labs, <a href="https://photographic-memory.herokuapp.com" target="_blank">Photographic Memory</a>! I always liked working on that project because the game was so fun to play. That is why I was so motivated to complete the game again. It was also the project where I wrote the most javascript.</p>

            <p>Reflecting on the project, I think I made a great choice. With so much state changing throughout the game I got a much better understanding of React component state, props and the React API. It also allowed me the chance to break my page into smaller and smaller components as I went along. I also got a chance to try my hand at ES6, Babel, and Gulp; more things I wasn"t very familar with before I started this.</p>

            <p>Check out the finished version <a href="https://photographic.herokuapp.com" target="_blank">here</a> or the repository <a href="https://github.com/terit/react-photographic-memory" target="_blank">here</a>.</p>

            <p>Up next I"m going to rewrite another Lighthouse Labs project, Rotten Mangoes. I think it"s a good chance to try a more robust project with user accounts, multiple database models and a more complex application. It will also give me a chance to write a Node.js API server with the possibility of a universal/isomorphic refactor in the future.</p>

            <p>Stay tuned for more.</p>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="contents">
          <div>
            <h3>Welcome 2015</h3>
            <p>Welcome to my site, have a look around you might see something you like. If you do feel free to contact me through <a href="https://www.linkedin.com/in/andytheriault" target="_blank">LinkedIn</a> or email me directly <a href="mailto:andy@terit.tech" target="_blank">here</a>. My career as a web developer is just getting started so check back regularly as I update my profile.</p>
            <p>Currently I"m working for <a href="https://mybesthelper.com/" target="_blank">myBestHelper</a>, a company which helps families find babysitters, nannies or any sort of helper they need.</p>
          </div>
        </div>
      </div>
      <div className="arrow-down">
        <i className="fa fa-caret-down"></i>
      </div>
    </div>
  );
}

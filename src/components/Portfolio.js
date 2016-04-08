import React from 'react';

export default function Portfolio() {
  return (
    <div className="section" data-menuanchor="portfolio">
      <div className="slide">
        <div className="contents">
          <div>
            <h3>Photographic Memory 2.0<small className="text-right"><a href="https://github.com/terit/react-photographic-memory" target="_blank">Source</a></small></h3>
            <img src="images/portfolio/photographic.png" />
            <p>
              A memory match game using Instagram hashtags. Built using a Sinatra framework for the API and an all new ReactJS front end.
            </p>
            <p><a href="https://photographic.herokuapp.com" target="_blank">See it live</a></p>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="contents">
          <div>
            <h3>Full Roster<small className="text-right"><a href="http://github.com/terit" target="_blank">Private Repo</a></small></h3>
            <img src="images/portfolio/fullroster.png" />
            <p>
              An eloquent solution to running a multi-team, multi-sport event for anyone. Built with Ruby on Rails with lots of dynamic content being loaded via Javascript.
            </p>
            <p><a href="#">No longer maintained.</a></p>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="contents">
          <div>
            <h3>Photographic Memory<small className="text-right"><a href="https://github.com/Terit/photographic-memory" target="_blank">Source</a></small></h3>
            <img src="images/portfolio/photomemory.png" />
            <p>
              A memory match game using Instagram hashtags. Built using a Sinatra framework and Javascript front end.
            </p>
            <p><a href="https://photographic-memory.herokuapp.com" target="_blank">See it live</a></p>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="contents">
          <div>
            <h3>Rotten Mangoes<small className="text-right"><a href="http://github.com/terit/rotten-mangoes" target="_blank">Source</a></small></h3>
            <img src="images/portfolio/rottenmangoes.png" />
            <p>
              My first Ruby on Rails app, a Rotten Tomatoes clone. Features include Users, Admins who can ghost other users, search bar and advanced search.
            </p>
            <p><a href="https://johnnyrottenmangoes.herokuapp.com" target="_blank">See it live</a></p>
          </div>
        </div>
      </div>
     </div>
  );
}

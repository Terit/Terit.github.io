import React from 'react';

export default function RightSection() {
  return (
    <section id="right">
      <p className="cli"><span className="red">~/resume</span> <span className="green">$</span> <span id="summary"></span></p>
      <div id="summaryOutput" className="output">
        <p className="summary">I'm a Full Stack Web Developer who is passionate about creating functional well designed software. I love working with new languages and technologies. The Odin Project and an intensive bootcamp at Lighthouse Labs have fuelled my hunger for learning. I aim to build upon my skills by immersing myself in new projects and discussing them with others.</p>
        <p>~</p>
        <hr/>
        <p>:q</p>
        <p className="cli"><span className="red">~/resume</span> <span className="green">$</span> <span id="projects"></span></p>
      </div>

      <div id="projectsOutput" className="output">
        <p className="vim"><span>def</span> Photographic Memory</p>
        <p className="tab">A timed memory match game with images generated from Instagram hashtags. Simple but addictive.</p>
        <p className="tab"><a href="https://photographic-memory.herokuapp.com" target="_blank"># Demo</a><a href="https://github.com/terit/photographic-memory" target="_blank">/Source</a></p>
        <p className="vim"><span>end</span></p>
        &nbsp;
        <p className="vim"><span>def</span> Photographic Memory 2.0</p>
        <p className="tab">My first ReactJS project not involving a tutorial. I rebuilt the game almost completely from the ground, only repurposing the old Sinatra server to be an API.</p>
        <p className="tab"><a href="https://photographic.herokuapp.com" target="_blank"># Demo</a><a href="https://github.com/terit/react-photographic-memory" target="_blank">/Source</a></p>
        <p className="vim"><span>end</span></p>
        &nbsp;
        <p className="vim"><span>def</span> Rotten Mangoes</p>
        <p className="tab">A Rotten Tomatoes clone built with Ruby on Rails and theMovieDB API.</p>
        <p className="tab"><a href="https://johnnyrottenmangoes.herokuapp.com" target="_blank"># Demo</a><a href="https://github.com/terit/rotten-mangoes" target="_blank">/Source</a></p>
        <p className="vim"><span>end</span></p>
        &nbsp;
        <p className="vim"><span>def</span> London Drugs Schedule Widget</p>
        <p className="tab">A Java based Selenium Webdriver program to login in to the London Drugs employee portal and capture my bi-weekly schedule. The exported data was used for a custom Lua Rainmeter desktop widget.</p>
        <p className="tab"><a href="https://github.com/Terit/LD-Schedule-Getter" target="_blank"># Source</a></p>
        <p className="vim"><span>end</span></p>
        &nbsp;
        <p className="vim"><span>def</span> Full Roster-Event Management</p>
        <p className="tab">An eloquent solution to running multi-team, multi-sport events. Built with Ruby on Rails with heavy use of Javascript to dynamically load content.</p>
        <p className="tab"><a href="#" className="play-print"># No longer maintained :(</a></p>
        <p className="vim"><span>end</span></p>
        <p>~</p>
        <hr />
        <p>:q</p>
        <p className="cli"><span className="red">~/resume</span> <span className="green">$</span> <span id="skills"></span></p>
      </div>
      <div id="skillsOutput" className="output">
        <p className="cli"><span className="red">~/resume/skills</span> <span className="green">$</span> <span id="ls"></span></p>
      </div>
      <div id ="lsOutput" className="output">
        <table>
          <tbody>
            <tr>
              <td>LANGUAGES</td>
              <td>HTML5</td>
              <td>CSS3</td>
              <td>Ruby</td>
              <td>Javascript</td>
              <td>Markdown</td>
              <td>Java</td>
              <td>SQL</td>
              <td>Elixir</td>
            </tr>
            <tr>
              <td>FRAMEWORKS</td>
              <td>Rails</td>
              <td>ReactJS</td>
              <td>Sinatra</td>
              <td>Meteor</td>
              <td>Ember</td>
              <td>Phoenix</td>
              <td>Foundation</td>
              <td>Bootstrap</td>
            </tr>
            <tr>
              <td>MISCELLANEOUS</td>
              <td>Git</td>
              <td>Github</td>
              <td>Heroku</td>
              <td>Vagrant</td>
              <td>Redis</td>
              <td>Resque</td>
              <td>Postgresql</td>
              <td>Sqlite3</td>
              <td>ReactJS</td>
            </tr>
          </tbody>
        </table>
        <p className="cli">
          <span className="red">~/resume</span>
          <span className="green">$</span>
          <span id="education"></span>
        </p>
      </div>
      <div id="educationOutput" className="output">
        <p className="cli">
          <span className="red">~/resume/education</span>
          <span className="green">$</span>
          <span id="educationLoop"></span>
        </p>
      </div>
      <div id="educationLoopOutput" className="output">
        <p>Lighthouse Labs</p>
        <p className="tab">Immersive Web Development Bootcamp</p>
        <p className="tab">2014</p>
        <p>Camosun College</p>
        <p className="tab">Computer Science</p>
        <p className="tab">2012-2013</p>
        <p>Douglas College</p>
        <p className="tab">Computer Science</p>
        <p className="tab">2012</p>
        &nbsp;
        <p className="cli">
          <span className="red">~/resume/education</span>
          <span className="green">$</span>
          <span id="employment"></span>
        </p>
      </div>
      <div id="employmentOutput" className="output">
        <p className="cli"><span className="red">~/resume/employment</span> <span className="green">$</span> <span id="employmentLoop"></span></p>
      </div>
      <div id="employmentLoopOutput" className="output">
        <p>myBestHelper.com</p>
        <p className="tab">Ruby on Rails Developer - Feb 2015..Present</p>
        <p className="double-tab">Maintained myBestHelper.com web app.</p>
        <p className="double-tab">Developed features: Multiple profiles, Job/Helper matching algorithm, improve admin panel features, improve page speed using caching and CDNs. Maintain servers and dev-ops. Plan and execute weekly development sprints.</p>
        <p>London Drugs</p>
        <p className="tab">Customer Service Specialist - Jul 2012..Oct 2014</p>
        <p className="double-tab">Team player who went beyond the role of ones title</p>
        <p className="double-tab">Sales orientated position</p>
        <p className="double-tab">Cash handling</p>
        <p>Capstone Imaging Supplies</p>
        <p className="tab">Logistics Managment - Aug 2007..Dec 2011</p>
        <p className="double-tab">Handled all logistics tasks, including shipping, receiving, and order picking</p>
        <p className="double-tab">Maintained company network and computer systems</p>
        <p className="double-tab">Responsible for shipping contract negotiations</p>
        <p className="cli play-print"><span className="red">~/resume/employment</span> <span className="green">$</span> <span id="replay">Click here to play again,</span> <span className="print">or here to Print</span><span className="blink">&#9612;</span></p>
        &nbsp;
      </div>
    </section>
  )
}

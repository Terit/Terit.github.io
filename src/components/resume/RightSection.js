import React from 'react';

import { resetResume } from '../../utils/resume.js';

import Prompt from './Prompt';
import Output from './Output';
import Job from './Job';
import School from './School';
import Project from './Project';

// const resume = require('../resume.json');
import resume from '../../resume.json';

export default class RightSection extends React.Component {
  renderProjects(key) {
    const project = resume.projects[key];
    return (
      <Project
        key={key}
        name={project.name}
        description={project.description}
        link={project.link}
        repoLink={project.repoLink}
      />
    );
  }

  renderJobs(key) {
    const job = resume.jobs[key];
    return (
      <Job
        key={key}
        name={job.name}
        title={job.title}
        dates={job.dates}
        description={job.description}
      />
    );
  }

  renderSchools(key) {
    const school = resume.schools[key];
    return (
      <School
        key={key}
        name={school.name}
        description={school.description}
        dates={school.dates}
      />
    );
  }

  renderSkills(row) {
    return (
      <tr>
        {row.map(skill => <td>{skill}</td>)}
      </tr>
    );
  }

  render() {
    return (
      <section id="right">
        <Prompt id="summary" />
        <Output id="summaryOutput">
          <p className="summary">
            {resume.summary}
          </p>
          <p>~</p>
          <hr />
          <p>:q</p>
          <Prompt id="projects" />
        </Output>
        <Output id="projectsOutput">
          &nbsp;
          {resume.projects.map((i, key) => this.renderProjects(key))}
          <hr />
          <p>:q</p>
          <Prompt id="skills" />
        </Output>
        <Output id="skillsOutput">
          <span></span>
          <Prompt id="ls" dir="/skills" />
        </Output>
        <Output id="lsOutput">
          <table>
            <tbody>
              {resume.skills.map((i) => this.renderSkills(i))}
            </tbody>
          </table>
          <Prompt id="education" dir="/skills" />
        </Output>
        <Output id="educationOutput">
          <span></span>
          <Prompt id="educationLoop" dir="/education" />
        </Output>
        <Output id="educationLoopOutput">
          {resume.schools.map((i, key) => this.renderSchools(key))}
          <Prompt id="employment" dir="/education" />
        </Output>
        <Output id="employmentOutput">
          <span></span>
          <Prompt id="employmentLoop" dir="/employment" />
        </Output>
        <Output id="employmentLoopOutput">
          {resume.jobs.map((i, key) => this.renderJobs(key))}
          <p className="cli play-print">
            <span className="red">~/resume/employment</span>
            <span className="green"> $ </span>
            <span id="replay" onClick={resetResume}>Click here to play again,</span>
            <span className="print" onClick={window.print}>or here to Print</span>
            <span className="blink"> &#9612;</span>
          </p>
          &nbsp;
        </Output>
      </section>
    );
  }
}

import '../vendor/typed.js';
import $ from 'jquery';

import resumeJSON from './resumeConfig.json';

const typer = ({ element, string, delay }) => new Promise((resolve) => {
  $(element).typed({
    strings: [string],
    typeSpeed: 75,
    cursorChar: '&#9612;',
    startDelay: delay,
    showCursor: false,
    onStringTyped: () => {
      $(`${element}Output`).delay(delay).show();
      resolve();
    },
  });
});

export const type = () => {
  resumeJSON.map((line) => typer(line));
};

export const resetResume = () => {
  $('.output').hide();
  $(`#whoami, #contact, #summary, #projects, #skills, #ls,
    #education, #educationLoop, #employment, #employmentLoop`)
      .typed('reset');
  window.scrollTo(0, 0);
  type();
};

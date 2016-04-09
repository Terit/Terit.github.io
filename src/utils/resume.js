import '../vendor/typed.js';
import $ from 'jquery';
// function typer(el, string, delay, cb) {
//   delay = typeof delay !== 'undefined' ? delay : 300;
//   $(el).typed({
//     strings: [string],
//     typeSpeed: 75,
//     cursorChar: "&#9612;",
//     startDelay: delay,
//     showCursor: false,
//     onStringTyped: function () {
//       $(el + "Output").show();
//       cb;
//     },
//   });
// }

const typer = (element, string, delay) => new Promise((resolve) => {
  $(element).typed({
    strings: [string],
    typeSpeed: 75,
    cursorChar: '&#9612;',
    startDelay: delay,
    showCursor: false,
    onStringTyped: () => {
      $(`${element}Output`).show();
      resolve();
    },
  });
});

export const type = () => {
  typer('#whoami', 'whoami ')
    .then(typer('#contact', 'vim contact.txt ', 1000))
    .then(typer('#summary', 'vim summary.txt ', 3000))
    .then(typer('#projects', 'vim projects.txt ', 5000))
    .then(typer('#skills', 'cd skills', 7000))
    .then(typer('#ls', 'ls -l', 9000))
    .then(typer('#education', 'cd ../education', 11000))
    .then(typer('#educationLoop', 'for school in schools; do echo $school; done', 13000))
    .then(typer('#employment', 'cd ../employment', 20000))
    .then(typer('#employmentLoop', 'for job in jobs; do echo $job; done', 22000));
};

$(() => {
  $('.print').on('click', () => window.print());

  $('#replay').on('click', () => {
    $('.output').hide();
    $('#whoami, #contact, #summary, #projects, #skills, #ls, #education, #educationLoop, #employment, #employmentLoop').typed('reset');
    window.scrollTo(0, 0);
    type();
  });
});

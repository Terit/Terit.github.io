const resumeConfig = [
  {
    "element": "#whoami",
    "string": "whoami ",
    "delay": 0
  },
  {
    "element": "#contact",
    "string": "vim contact.txt ",
    "delay": 1000
  },
  {
    "element": "#summary",
    "string": "vim summary.txt ",
    "delay": 3000
  },
  {
    "element": "#employment",
    "string": "cd employment",
    "delay": 6000
  },
  {
    "element": "#employmentLoop",
    "string": "cat jobs.txt ",
    "delay": 9000
  },
  {
    "element": "#skills",
    "string": "cd ..",
    "delay": 11000
  },
  {
    "element": "#ls",
    "string": "ls -l skills",
    "delay": 13000
  },
  {
    "element": "#projects",
    "string": "vim projects.rb ",
    "delay": 16000
  },
  {
    "element": "#education",
    "string": "cd education",
    "delay": 22000
  },
  {
    "element": "#educationLoop",
    "string": "for school in schools; do echo $school; done;",
    "delay": 24000
  }
];

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
    }
  });
});

const type = () => resumeConfig.map(typer);

const resetResume = () => {
  $('.output').hide();
  $(`#whoami, #contact, #summary, #projects, #skills, #ls,
    #education, #educationLoop, #employment, #employmentLoop`)
    .typed('reset');
  window.scrollTo(0, 0);
  type();
};

window.addEventListener('load', () => {
  setTimeout(type, 1000);
})

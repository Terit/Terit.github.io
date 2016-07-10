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
    "element": "#projects",
    "string": "vim projects.rb ",
    "delay": 6000
  },
  {
    "element": "#skills",
    "string": "cd skills",
    "delay": 9000
  },
  {
    "element": "#ls",
    "string": "ls -l",
    "delay": 11000
  },
  {
    "element": "#education",
    "string": "cd ../education",
    "delay": 14000
  },
  {
    "element": "#educationLoop",
    "string": "for school in schools; do echo $school; done",
    "delay": 16000
  },
  {
    "element": "#employment",
    "string": "cd ../employment",
    "delay": 22000
  },
  {
    "element": "#employmentLoop",
    "string": "cat jobs.txt ",
    "delay": 25000
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
    },
  });
});

const type = () => {
  resumeConfig.map(typer);
};

const resetResume = () => {
  $('.output').hide();
  $(`#whoami, #contact, #summary, #projects, #skills, #ls,
    #education, #educationLoop, #employment, #employmentLoop`)
      .typed('reset');
  window.scrollTo(0, 0);
  type();
};

setTimeout(type, 1000);

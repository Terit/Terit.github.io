function type() {
  typer('#whoami', 'whoami', 100,
    typer('#contact', 'vim contact.txt ', 300,
      typer('#summary', 'vim summary.txt ', 2300,
        typer('#projects', 'vim projects.txt ', 4200,
          typer('#skills', 'cd skills', 6000,
            typer('#ls', 'ls -l', 7000,
              typer('#education', 'cd ../education', 9000,
                typer('#educationLoop', 'for school in schools; do echo $school; done', 10000,
                  typer('#employment', 'cd ../employment', 13000, 
                    typer('#employmentLoop', 'for job in jobs; do echo $job; done', 16000)
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
}

function typer(el, string, delay, cb) {
  delay = typeof delay !== 'undefined' ? delay : 300;
  $(el).typed({
    strings: [string],
    typeSpeed: 75,
    cursorChar: "&#9612;",
    startDelay: delay,
    showCursor: false,
    onStringTyped: function() {
      $(el + "Output").show();
      cb;
    }
  });
}

$(function() {
  type();

  $('.print').on('click', function() {
    window.print()
  });

 $('#replay').on('click', function() {
    $('.output').hide();
    $('#whoami, #contact, #summary, #projects, #skills, #ls, #education, #educationLoop, #employment, #employmentLoop').typed('reset');
    window.scrollTo(0, 0);
    type();
  });
});

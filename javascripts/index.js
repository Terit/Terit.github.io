const portrait = document.querySelector('.js-portrait');

function revealMore() {
  const more = document.querySelector('.js-portrait-reveal');
  more.classList = 'header-portrait__reveal js-portrait-reveal reveal';
}

function revealLess() {
  const more = document.querySelector('.js-portrait-reveal');
  more.classList = 'header-portrait__reveal js-portrait-reveal';
}

portrait.addEventListener('mouseover', revealMore);
portrait.addEventListener('mouseleave', revealLess);

document.addEventListener('DOMContentLoaded', function () {
  var bootScreen = document.getElementById('boot-screen');
  var pageWrapper = document.getElementById('page-wrapper');
  var bootPlayed = localStorage.getItem('boot-played');

  if (bootScreen && !bootPlayed) {
    var bootLines = bootScreen.querySelectorAll('.boot-line');
    bootLines.forEach(function (line) {
      var delay = parseInt(line.getAttribute('data-delay'), 10);
      setTimeout(function () {
        line.classList.add('visible');
      }, delay);
    });

    setTimeout(function () {
      bootScreen.classList.add('fade-out');
      setTimeout(function () {
        bootScreen.style.display = 'none';
        pageWrapper.classList.remove('hidden');
        pageWrapper.classList.add('page-enter');
        localStorage.setItem('boot-played', '1');
        animateElements();
      }, 500);
    }, 2400);
  } else {
    if (bootScreen) bootScreen.style.display = 'none';
    if (pageWrapper) pageWrapper.classList.remove('hidden');
    animateElements();
  }
});

function animateElements() {
  var selectors = [
    '.site-header',
    '.welcome-section',
    '.profile-sidebar',
    '.search-container',
    '.post-list-header',
    '.post-card',
    '.site-footer',
    '.post',
    '.archives',
    '.taxonomy-page',
    '.taxonomy-term',
    '.about-content',
    '.skills-page'
  ];
  var elements = document.querySelectorAll(selectors.join(','));
  elements.forEach(function (el, i) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    setTimeout(function () {
      el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 50 * i);
  });
}

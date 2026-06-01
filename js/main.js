document.addEventListener('DOMContentLoaded', function () {
  var bootScreen = document.getElementById('boot-screen');

  if (bootScreen) {
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
        var pageWrapper = document.getElementById('page-wrapper');
        pageWrapper.classList.remove('hidden');
        pageWrapper.classList.add('page-enter');
        animateElements();
      }, 400);
    }, 2400);
  } else {
    animateElements();
  }
});

function animateElements() {
  var selectors = [
    '.site-header',
    '.search-container',
    '.post-list-header',
    '.post-card',
    '.site-footer',
    '.post',
    '.archives',
    '.taxonomy-page',
    '.taxonomy-term',
    '.about-content'
  ];
  var elements = document.querySelectorAll(selectors.join(','));
  elements.forEach(function (el, i) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    setTimeout(function () {
      el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 60 * i);
  });
}

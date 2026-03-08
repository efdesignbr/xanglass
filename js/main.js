document.addEventListener('DOMContentLoaded', function () {
  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.parentElement;
      var wasActive = item.classList.contains('active');
      // close all
      document.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('active');
      });
      if (!wasActive) item.classList.add('active');
    });
  });

  // Active menu link based on current path
  var path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.primary-navigation a').forEach(function (a) {
    var href = a.getAttribute('href');
    var linkPath = href.replace(/\/$/, '') || '/';
    // Match relative paths
    if (path === linkPath || path.endsWith(linkPath)) {
      a.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.mobile-menu');
  var menu = document.querySelector('.primary-navigation ul');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    toggle.classList.toggle('active');
    menu.classList.toggle('show');
  });

  // Close menu on link click
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.classList.remove('active');
      menu.classList.remove('show');
    });
  });
});

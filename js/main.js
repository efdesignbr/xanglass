document.addEventListener('DOMContentLoaded', function () {
  // Hero slider
  document.querySelectorAll('[data-slider]').forEach(function (slider) {
    var slides = slider.querySelectorAll('.hero-slide');
    var dots = slider.querySelectorAll('.hero-slider-dot');
    var currentIndex = 0;
    var intervalId = null;

    if (slides.length < 2) return;

    function showSlide(index) {
      currentIndex = index;

      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('is-active', slideIndex === index);
      });

      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('is-active', dotIndex === index);
        dot.setAttribute('aria-current', dotIndex === index ? 'true' : 'false');
      });
    }

    function nextSlide() {
      showSlide((currentIndex + 1) % slides.length);
    }

    function startAutoplay() {
      stopAutoplay();
      intervalId = window.setInterval(nextSlide, 4500);
    }

    function stopAutoplay() {
      if (intervalId) {
        window.clearInterval(intervalId);
        intervalId = null;
      }
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        showSlide(index);
        startAutoplay();
      });
    });

    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);
    slider.addEventListener('focusin', stopAutoplay);
    slider.addEventListener('focusout', startAutoplay);

    showSlide(0);
    startAutoplay();
  });

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

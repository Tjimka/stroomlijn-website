(function () {
  // NAV scroll state
  var nav = document.getElementById('nav');
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile burger
  var burger = document.getElementById('navBurger');
  var mobile = document.getElementById('navMobile');
  burger.addEventListener('click', function () {
    var open = mobile.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // Close mobile nav when a link is tapped
  mobile.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      mobile.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
  // Close mobile nav on outside click
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) {
      mobile.classList.remove('open');
    }
  });

  // Scroll-reveal
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });

  // Hero elements in immediately
  window.addEventListener('load', function () {
    document.querySelectorAll('.hero .rv').forEach(function (el) {
      el.classList.add('in');
    });
  });
})();
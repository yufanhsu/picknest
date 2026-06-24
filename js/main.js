/* PickNest — interactions */
(function () {
  // Sticky header shadow
  const header = document.querySelector('.site-header');
  const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll); onScroll();

  // Mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  // Scroll reveal (with graceful fallback)
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    reveals.forEach(el => obs.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in'));
  }

  // Product filter (products page)
  const chips = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-cat]');
  if (chips.length && cards.length) {
    chips.forEach(chip => chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const f = chip.getAttribute('data-filter');
      cards.forEach(card => {
        const show = f === 'all' || card.getAttribute('data-cat') === f;
        card.style.display = show ? '' : 'none';
      });
    }));
  }

  // Current year
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();

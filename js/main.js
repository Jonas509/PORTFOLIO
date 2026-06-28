/* ================================================
   PORTFOLIO - JF PRODZ
   Fichier: js/main.js
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── ANIMATION AU SCROLL ── */
  const fadeEls = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(el => observer.observe(el));


  /* ── ACTIVE NAV LINK AU SCROLL ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => navObserver.observe(s));


  /* ── SMOOTH CLOSE MENU MOBILE (futur) ── */
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Prévu pour un menu burger mobile si ajouté
    });
  });

});

/* ================================
   CURSOR
================================ */
const cursor = document.querySelector('.cursor');

if (cursor) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
}

/* ================================
   ACTIVE NAV
================================ */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.side-nav a');

if (sections.length && navLinks.length) {
  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const top = section.offsetTop - 200;
      const height = section.offsetHeight;

      if (window.pageYOffset >= top && window.pageYOffset < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ================================
   PROBLEM PAGE — FADE IN
================================ */
const fadeElements = document.querySelectorAll('.fade-in-line');

const fadeInOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;

    if (elTop < triggerBottom) {
      el.classList.add('fade-in');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

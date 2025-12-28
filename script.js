/* ================================
   CUSTOM CURSOR
================================ */
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

/* ================================
   ACTIVE NAV ON SCROLL
================================ */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.side-nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    if (pageYOffset >= sectionTop) {
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

/* ================================
   FADE-IN TEXT (PROBLEM HEADER)
================================ */
const fadeLines = document.querySelectorAll('.fade-in-line');

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.style.transition = `all 0.8s ease ${index * 0.2}s`;
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

fadeLines.forEach(line => fadeObserver.observe(line));

/* ================================
   DUAL WORLD DIVIDER + CENTER TEXT
================================ */
const divider = document.querySelector('.divider-line');
const centerText = document.querySelector('.center-text');

const worldObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      divider.style.transition = 'height 1.2s ease';
      divider.style.height = '80%';

      centerText.style.transition = 'opacity 1s ease 0.8s';
      centerText.style.opacity = 1;
    }
  });
}, { threshold: 0.3 });

if (divider) worldObserver.observe(divider);

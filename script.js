/* ================================
   CUSTOM CURSOR
================================ */
const cursor = document.querySelector('.cursor');

if (cursor) {
  document.addEventListener('mousemove', e => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
}

/* ================================
   ACTIVE NAV ON SCROLL
================================ */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.side-nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const top = section.offsetTop - 200;
    const height = section.offsetHeight;

    if (pageYOffset >= top && pageYOffset < top + height) {
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

// Fade-in on scroll for problem & solution pages
const fadeElements = document.querySelectorAll('.fade-in-line, .solution-header, .solution-card');

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

/* ================================
   LAYER INTERACTION
================================ */
const layers = document.querySelectorAll('.layer');

layers.forEach(layer => {
  layer.addEventListener('mouseenter', () => {
    layers.forEach(l => {
      l.classList.remove('active');
      l.classList.add('inactive');
    });

    layer.classList.add('active');
    layer.classList.remove('inactive');
  });
});

/* ================================
   IMPACT PAGE FADE-IN
================================ */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});

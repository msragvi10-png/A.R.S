/* ================================
   CUSTOM CURSOR
================================ */
const cursor = document.querySelector('.cursor');

if (cursor) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
}

/* ================================
   ACTIVE NAV ON SCROLL
================================ */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.side-nav a');

if (sections.length && navLinks.length) {
  window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 200;
      const sectionHeight = section.offsetHeight;

      if (
        window.pageYOffset >= sectionTop &&
        window.pageYOffset < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ================================
   PROBLEM PAGE ANIMATIONS
================================ */
const fadeElements = document.querySelectorAll('.fade-in-line');
const centerText = document.querySelector('.fade-in-center');
const divider = document.querySelector('.divider-line');

function handleScrollAnimations() {
  const scrollY = window.scrollY + window.innerHeight;

  fadeElements.forEach((el, index) => {
    if (scrollY > el.offsetTop + 50) {
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, index * 300);
    }
  });

  const dualSection = document.querySelector('.dual-world');
  if (scrollY > dualSection.offsetTop + 100) {
    divider.style.height = '80%';
  }

  if (scrollY > dualSection.offsetTop + 200) {
    centerText.style.opacity = 1;
  }
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);

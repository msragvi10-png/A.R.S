const cursor = document.querySelector('.cursor');

if (cursor) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
}

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

/* CURSOR */
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

/* FADE IN TEXT */
const fadeLines = document.querySelectorAll('.fade-in-line');

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transition = `all 0.8s ease ${i * 0.2}s`;
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

fadeLines.forEach(el => fadeObserver.observe(el));

/* DIVIDER + CENTER TEXT */
const divider = document.querySelector('.divider-line');
const centerText = document.querySelector('.center-text');

const worldObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    divider.style.transition = 'height 1.2s ease';
    divider.style.height = '80%';

    centerText.style.transition = 'opacity 1s ease 0.8s';
    centerText.style.opacity = 1;
  }
}, { threshold: 0.3 });

worldObserver.observe(divider);

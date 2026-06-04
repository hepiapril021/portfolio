const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle?.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('active');
  navToggle.classList.toggle('active', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

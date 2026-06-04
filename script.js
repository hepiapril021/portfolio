const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach((element) => observer.observe(element));

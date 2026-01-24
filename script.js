// script.js

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Smooth scroll for anchor links (fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
};
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, observerOptions);
sections.forEach(sec => observer.observe(sec));

// Simple form validation (if a form exists on the page)
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function (e) {
    const requiredFields = form.querySelectorAll('[required]');
    let allValid = true;
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        allValid = false;
        field.style.borderColor = 'var(--accent-color)';
      } else {
        field.style.borderColor = '';
      }
    });
    if (!allValid) {
      e.preventDefault();
      alert('Please fill in all required fields.');
    }
  });
}

/* =============================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   ============================================= */

// ---- NAVBAR SCROLL EFFECT ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ---- MOBILE NAV TOGGLE ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = navToggle.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close nav when link clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

// ---- TYPING ANIMATION ----
const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'Problem Solver',
  'Open Source Contributor',
  'Tech Enthusiast'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.getElementById('typedText');

function typeEffect() {
  const current = roles[roleIndex];

  if (!isDeleting) {
    typedText.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2000);
      return;
    }
  } else {
    typedText.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();

// ---- FADE IN ON SCROLL ----
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add fade-in class to elements
const elementsToAnimate = [
  '.about-grid',
  '.skill-category',
  '.project-card',
  '.timeline-item',
  '.contact-grid'
];

document.querySelectorAll(elementsToAnimate.join(', ')).forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  observer.observe(el);
});

// ---- ACTIVE NAV LINK ON SCROLL ----
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.style.color = '';
    if (item.getAttribute('href') === `#${current}`) {
      item.style.color = '#818cf8';
    }
  });
});

// ---- CONTACT FORM ----
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = contactForm.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  // Simulate form submission (replace with real API/EmailJS/etc.)
  setTimeout(() => {
    formStatus.textContent = '✅ Message sent! I\'ll get back to you soon.';
    formStatus.className = 'form-status success';
    contactForm.reset();
    btn.textContent = 'Send Message 🚀';
    btn.disabled = false;

    setTimeout(() => {
      formStatus.textContent = '';
      formStatus.className = 'form-status';
    }, 5000);
  }, 1500);
});

// ---- SMOOTH SCROLL FOR ALL ANCHORS ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ---- SKILL TAG HOVER SPARKLE ----
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('mouseenter', () => {
    tag.style.background = 'rgba(99, 102, 241, 0.2)';
  });
  tag.addEventListener('mouseleave', () => {
    tag.style.background = '';
  });
});

console.log('%c👋 Hey developer! This portfolio was built with HTML, CSS & JS.',
  'color: #818cf8; font-size: 14px; font-weight: bold; padding: 8px;');
console.log('%c✏️  Edit index.html, style.css, and script.js to customize it!',
  'color: #94a3b8; font-size: 12px; padding: 4px;');

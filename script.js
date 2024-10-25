// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Prevents default jump behavior
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth' // Smoothly scrolls to the target section
    });
  });
});

// Progress Bar Animation on Scroll
window.addEventListener('scroll', () => {
  const skills = document.querySelectorAll('.progress-bar span');
  skills.forEach(skill => {
    const width = skill.getAttribute('style').match(/\d+/)[0];
    if (window.scrollY + window.innerHeight >= skill.parentElement.offsetTop) {
      skill.style.width = `${width}%`;
    }
  });
});

// Contact Form Validation
document.querySelector('form').addEventListener('submit', function(e) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    e.preventDefault();
    alert("Please fill in all fields.");
  }
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Project Filtering by Category
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    document.querySelectorAll('.project').forEach(project => {
      if (category === 'all' || project.getAttribute(

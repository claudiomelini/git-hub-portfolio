window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.backgroundColor = '#222'; // Darker background when scrolling
    nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)'; // Add shadow
  } else {
    nav.style.backgroundColor = '#333'; // Original background color
    nav.style.boxShadow = 'none'; // Remove shadow
  }
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
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

//Tema chiaro scuro
const themeToggle = document.querySelector("#theme-toggle");
const body = document.body;

// Check for saved theme in localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  themeToggle.textContent = "🌙"; // Icona della luna per il tema scuro
} else {
  themeToggle.textContent = "🌞"; // Icona del sole per il tema chiaro
}

themeToggle.addEventListener("click", () => {
  // Toggle la classe dark-theme su body
  body.classList.toggle("dark-theme");

  // Cambia l'icona del pulsante
  if (body.classList.contains("dark-theme")) {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌞";
    localStorage.setItem("theme", "light");
  }
});

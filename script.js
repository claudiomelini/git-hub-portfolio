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

// Parallax
const themeToggle = document.querySelector("#theme-toggle");
const body = document.body;

// Funzione per aggiornare le immagini parallax in base al tema
function updateParallaxImages() {
  const parallaxElements = document.querySelectorAll(".parallax");

  parallaxElements.forEach(element => {
    const lightImage = element.getAttribute("data-image-light");
    const darkImage = element.getAttribute("data-image-dark");
    const imageUrl = body.classList.contains("dark-theme") ? darkImage : lightImage;

    // Log per debug
    console.log(`Immagine caricata: ${imageUrl}`);

    // Imposta l'immagine di sfondo
    element.style.backgroundImage = `url(${imageUrl})`;
  });
}

// Inizializza il tema al caricamento della pagina
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  themeToggle.textContent = "🌙";
} else {
  themeToggle.textContent = "🌞";
}

// Aggiorna le immagini al caricamento
updateParallaxImages();

// Event listener per il cambio tema
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  // Cambia l'icona del pulsante
  if (body.classList.contains("dark-theme")) {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌞";
    localStorage.setItem("theme", "light");
  }

  // Aggiorna le immagini di sfondo parallax
  updateParallaxImages();
});
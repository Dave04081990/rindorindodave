document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let currentIndex = 0;
  let interval;

  function updateSlides(newIndex) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active', 'prev');
      if (i === newIndex) {
        slide.classList.add('active');
      } else if (i === currentIndex) {
        slide.classList.add('prev');
      }
      // Alle anderen bleiben ohne Klasse = rechts außerhalb
    });
    currentIndex = newIndex;
  }

  function nextSlide() {
    const newIndex = (currentIndex + 1) % slides.length;
    updateSlides(newIndex);
  }

  function prevSlide() {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides(newIndex);
  }

  nextBtn.addEventListener('click', () => {
    clearInterval(interval);
    nextSlide();
    interval = setInterval(nextSlide, 5000);
  });

  prevBtn.addEventListener('click', () => {
    clearInterval(interval);
    prevSlide();
    interval = setInterval(nextSlide, 5000);
  });

  // Starte initial
  updateSlides(currentIndex);

  interval = setInterval(nextSlide, 5000);
});

// Optionale Duplikation der Slides (für Endloswirkung)
window.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.slider-track');
  const slides = Array.from(track.children);
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Toggle Navigation bei Klick auf Burger
  burger.addEventListener("click", function (e) {
    e.stopPropagation();
    nav.classList.toggle("active");
  });

  // Klick außerhalb → Navigation schließen
  document.addEventListener("click", function (e) {
    if (
      nav.classList.contains("active") &&
      !nav.contains(e.target) &&
      !burger.contains(e.target)
    ) {
      nav.classList.remove("active");
    }
  });

  // Scroll-Verhalten: nur Navigation schließen, Burger bleibt sichtbar
  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop + 10) {
      // Runtergescrollt → Menü schließen
      nav.classList.remove("active");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});

let lastScroll = 0;
const header = document.querySelector('header'); // Passe an deine Header-Selektor an
let ticking = false;

// Angenommen, dein Menü bekommt beim Öffnen die Klasse "menu-open"
function isMenuOpen() {
  return document.body.classList.contains('menu-open');
}

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Wenn Menü geöffnet ist, Header immer anzeigen
      if (isMenuOpen()) {
        header.style.transform = 'translateY(0)';
      } else {
        if (currentScroll > lastScroll && currentScroll > 50) {
          // Scroll nach unten → Header ausblenden
          header.style.transform = 'translateY(-100%)';
        } else {
          // Scroll nach oben → Header einblenden
          header.style.transform = 'translateY(0)';
        }
      }

      header.style.transition = 'transform 0.3s ease';
      lastScroll = currentScroll <= 0 ? 0 : currentScroll;
      ticking = false;
    });
    ticking = true;
  }
});

// Optionale Duplikation der Slides (für Endloswirkung)
window.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.slider-track');
  const slides = Array.from(track.children);
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  let lastScroll = 0;

  if (burger && nav) {
    // Klick auf Burger → Menü auf/zu
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    // Klick außerhalb → Menü schließen
    document.addEventListener('click', (e) => {
      if (
        nav.classList.contains('active') &&
        !nav.contains(e.target) &&
        !burger.contains(e.target)
      ) {
        nav.classList.remove('active');
      }
    });

    // Scroll → Menü automatisch schließen
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (nav.classList.contains('active')) {
        nav.classList.remove('active'); // Menü zuklappen
      }

      lastScroll = currentScroll;
    });
  }
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

const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
});

const slider = document.querySelector('.slider');
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');

let isDown = false;
let startX;
let scrollLeft;
let lastX = 0;
let speed = 0.5;

const startDrag = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX;
  scrollLeft = track.scrollLeft;
};

const endDrag = () => {
  isDown = false;
  slider.classList.remove('active');
  lastX = track.scrollLeft;
};

const dragMove = (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX;
  const walk = (x - startX) * 2; // Geschwindigkeit des Ziehens
  track.scrollLeft = scrollLeft - walk;
};

const autoScroll = () => {
  if (!isDown) {
    track.scrollLeft += speed;
    if (track.scrollLeft >= track.scrollWidth - slider.offsetWidth) {
      track.scrollLeft = 0;
    }
  }
  requestAnimationFrame(autoScroll);
};

slider.addEventListener('mousedown', startDrag);
slider.addEventListener('touchstart', startDrag);
slider.addEventListener('mousemove', dragMove);
slider.addEventListener('touchmove', dragMove);
slider.addEventListener('mouseup', endDrag);
slider.addEventListener('mouseleave', endDrag);
slider.addEventListener('touchend', endDrag);

autoScroll();

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.slider-track');
  const slides = Array.from(track.children);

  // Stelle sicher, dass alle Bilder geladen sind, bevor du die Breite misst
  Promise.all(
    slides.map(slide => {
      const img = slide.querySelector('img');
      return new Promise(resolve => {
        if (img.complete) {
          resolve();
        } else {
          img.onload = img.onerror = resolve;
        }
      });
    })
  ).then(() => {
    // Dupliziere Slides für Endlos-Scroll
    slides.forEach(slide => {
      const clone = slide.cloneNode(true);
      track.appendChild(clone);
    });

    // Breite neu setzen für flüssige Animation
    const totalWidth = Array.from(track.children).reduce((sum, slide) => {
      return sum + slide.offsetWidth + parseFloat(getComputedStyle(slide).marginRight || 0);
    }, 0);

    track.style.width = totalWidth + 'px';

    // Optional: Neuanimation triggern (falls nötig bei Layoutshift)
    track.style.animation = 'none';
    // kurz warten, dann Animation neu setzen
    setTimeout(() => {
      track.style.animation = '';
    }, 10);
  });
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

  // Scroll-Verhalten: Burger & Menü verbergen beim Runterscrollen
  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop + 10) {
      // Runtergescrollt → ausblenden & Menü schließen
      burger.style.opacity = "0";
      burger.style.pointerEvents = "none";
      nav.classList.remove("active");
    } else if (currentScroll < lastScrollTop - 10) {
      // Hochgescrollt → Burger wieder anzeigen
      burger.style.opacity = "1";
      burger.style.pointerEvents = "auto";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});

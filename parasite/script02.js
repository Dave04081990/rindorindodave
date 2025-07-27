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

  burger.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});
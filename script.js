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

  burger.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});

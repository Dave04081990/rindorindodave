/* =====================================================================
   Dave RindoRindo — Portfolio Script
   Used by:  index.html  +  projects/*.html
   Path:     /assets/js/site.js
   ===================================================================== */

(function(){
  // ---------- THEME ----------
  const tBtn = document.getElementById('themeToggle');
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.setAttribute('data-theme','light');
  }
  if (tBtn){
    tBtn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      if (cur === 'light'){
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme','dark');
      } else {
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
      }
    });
  }

  // ---------- BURGER ----------
  const navMobile = document.getElementById('navMobile');
  const burger = document.getElementById('burger');
  if (burger && navMobile){
    burger.addEventListener('click', () => navMobile.classList.toggle('open'));
    navMobile.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => navMobile.classList.remove('open'))
    );
  }

  // ---------- NAV SCROLL STATE (only on transparent home nav) ----------
  const navEl = document.getElementById('nav');
  if (navEl && !document.body.classList.contains('project')){
    const onScroll = () => {
      if (window.scrollY > 60) navEl.classList.add('scrolled');
      else navEl.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---------- HERO SLIDER (home only) ----------
  const slidesEl = document.getElementById('slides');
  if (slidesEl){
    const images = (window.HERO_IMAGES || []).slice();
    // Fisher-Yates shuffle
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }

    images.forEach((src, i) => {
      const d = document.createElement('div');
      d.className = 'slide' + (i === 0 ? ' active' : '');
      d.style.backgroundImage = `url('${src}')`;
      slidesEl.appendChild(d);
    });

    const slideEls = slidesEl.querySelectorAll('.slide');
    const curEl = document.getElementById('cur');
    const totalEl = document.getElementById('total');
    const bar = document.getElementById('bar');
    if (totalEl) totalEl.textContent = String(images.length).padStart(2,'0');

    let idx = 0;
    let timer;

    function show(n){
      if (slideEls.length === 0) return;
      slideEls[idx].classList.remove('active');
      idx = (n + slideEls.length) % slideEls.length;
      slideEls[idx].classList.add('active');
      if (curEl) curEl.textContent = String(idx + 1).padStart(2,'0');
      if (bar){
        bar.style.transition = 'none';
        bar.style.width = '0%';
        requestAnimationFrame(() => {
          bar.style.transition = 'width 5s linear';
          bar.style.width = '100%';
        });
      }
    }
    function start(){
      clearInterval(timer);
      timer = setInterval(() => show(idx + 1), 5000);
      show(idx);
    }

    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    if (prev) prev.addEventListener('click', () => { show(idx - 1); start(); });
    if (next) next.addEventListener('click', () => { show(idx + 1); start(); });
    if (slideEls.length > 0) start();
  }

  // ---------- REVEAL ON SCROLL ----------
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting){
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));
  }

  // ---------- CLIENT MARQUEE (home only) ----------
  const track = document.getElementById('marqueeTrack');
  if (track && Array.isArray(window.CLIENT_LOGOS)){
    const logos = window.CLIENT_LOGOS;
    // build the html once
    const buildSet = () => logos.map(l =>
      `<img src="${l.src}" alt="${l.alt}" loading="lazy">`
    ).join('');
    // duplicate the set so the -50% translate creates a seamless loop
    track.innerHTML = buildSet() + buildSet();
  }

  // ---------- ACTIVE NAV ON SCROLL (home only) ----------
  if (!document.body.classList.contains('project')){
    const sections = ['work','about','contact'];
    const navAs = document.querySelectorAll('.nav-center a');
    if (navAs.length){
      window.addEventListener('scroll', () => {
        const y = window.scrollY + 200;
        let active = null;
        sections.forEach(id => {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= y) active = id;
        });
        navAs.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + active));
      }, { passive: true });
    }
  }
})();

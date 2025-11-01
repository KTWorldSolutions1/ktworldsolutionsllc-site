
(function(){
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  // Nav toggle
  const toggle = $('.nav-toggle');
  const nav = $('#site-nav');
  if (toggle && nav){
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  // Accessibility toolbar
  const announcer = $('.sr-announcer');
  function announce(msg){
    if(announcer){ announcer.textContent = msg; setTimeout(()=>announcer.textContent='', 1500); }
  }
  const root = document.documentElement;
  $$('.a11y-toolbar [data-a11y]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-a11y');
      if(key === 'contrast'){
        root.classList.toggle('high-contrast');
        btn.setAttribute('aria-pressed', root.classList.contains('high-contrast'));
        announce('High contrast ' + (root.classList.contains('high-contrast') ? 'on' : 'off'));
      } else if(key === 'bigger'){
        root.classList.toggle('bigger-text');
        btn.setAttribute('aria-pressed', root.classList.contains('bigger-text'));
        announce('Bigger text ' + (root.classList.contains('bigger-text') ? 'on' : 'off'));
      } else if(key === 'underline'){
        root.classList.toggle('underline-links');
        btn.setAttribute('aria-pressed', root.classList.contains('underline-links'));
        announce('Underline links ' + (root.classList.contains('underline-links') ? 'on' : 'off'));
      } else if(key === 'cb-safe'){
        root.classList.toggle('cb-safe');
        btn.setAttribute('aria-pressed', root.classList.contains('cb-safe'));
        announce('Colorblind safe palette ' + (root.classList.contains('cb-safe') ? 'on' : 'off'));
      } else if(key === 'motion'){
        root.classList.toggle('reduce-motion');
        btn.setAttribute('aria-pressed', !root.classList.contains('reduce-motion'));
        announce('Motion ' + (root.classList.contains('reduce-motion') ? 'reduced' : 'enabled'));
      }
    });
  });

  // Respect prefers-reduced-motion by default
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.documentElement.classList.add('reduce-motion');
  }

  // Carousel (hero)
  $$('.carousel').forEach(carousel => {
    const figures = $$('figure', carousel);
    const prev = $('.prev', carousel);
    const next = $('.next', carousel);
    let i = 0;
    function show(idx){
      figures.forEach((f, j) => f.classList.toggle('active', j===idx));
    }
    show(i);
    prev && prev.addEventListener('click', ()=>{ i = (i-1+figures.length)%figures.length; show(i); });
    next && next.addEventListener('click', ()=>{ i = (i+1)%figures.length; show(i); });
    const interval = parseInt(carousel.dataset.autoplay||0, 10);
    if(interval && !document.documentElement.classList.contains('reduce-motion')){
      setInterval(()=>{ i = (i+1)%figures.length; show(i); }, interval);
    }
  });

  // Gallery per service page
  $$('.gallery').forEach(gal => {
    const imgs = $$('img', gal);
    const prev = $('.prev', gal);
    const next = $('.next', gal);
    let i = 0;
    function show(idx){
      imgs.forEach((im, j)=> im.classList.toggle('active', j===idx));
    }
    show(i);
    prev && prev.addEventListener('click', ()=>{ i = (i-1+imgs.length)%imgs.length; show(i); });
    next && next.addEventListener('click', ()=>{ i = (i+1)%imgs.length; show(i); });
    const interval = parseInt(gal.dataset.autoplay||0, 10);
    if(interval && !document.documentElement.classList.contains('reduce-motion')){
      setInterval(()=>{ i = (i+1)%imgs.length; show(i); }, interval);
    }
  });

  // Testimonials slider
  $$('.slider').forEach(slider => {
    const slides = $$('.slide', slider);
    const dots = $('.slider-dots', slider);
    let i = 0;
    function show(idx){
      slides.forEach((s, j)=> s.classList.toggle('active', j===idx));
      if(dots){
        dots.innerHTML = '';
        slides.forEach((_, j)=>{
          const b = document.createElement('button');
          b.setAttribute('role', 'tab');
          b.setAttribute('aria-selected', j===idx ? 'true':'false');
          b.addEventListener('click', ()=> show(j));
          dots.appendChild(b);
        });
      }
    }
    show(i);
    const interval = parseInt(slider.dataset.autoplay||0, 10);
    if(interval && !document.documentElement.classList.contains('reduce-motion')){
      setInterval(()=>{ i = (i+1)%slides.length; show(i); }, interval);
    }
  });

  // Stats counter
  const counters = $$('[data-count]');
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const el = e.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        let cur = 0;
        const step = Math.ceil(target/40);
        const id = setInterval(()=>{
          cur += step;
          if(cur>=target){ cur = target; clearInterval(id); }
          el.textContent = cur;
        }, 30);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach(c=>obs.observe(c));
})();

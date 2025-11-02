
(function(){
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));

  const toggle = $('.nav-toggle'), nav = $('#site-nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      const ex = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!ex));
      nav.classList.toggle('open');
    });
  }

  const announcer = $('.sr-announcer');
  function say(msg){ if(announcer){ announcer.textContent = msg; setTimeout(()=>announcer.textContent='',1200); } }
  const root = document.documentElement;
  $$('.a11y-toolbar [data-a11y]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const k = btn.getAttribute('data-a11y');
      if(k==='contrast'){ root.classList.toggle('high-contrast'); btn.setAttribute('aria-pressed', root.classList.contains('high-contrast')); say('High contrast '+(root.classList.contains('high-contrast')?'on':'off')); }
      if(k==='bigger'){ root.classList.toggle('bigger-text'); btn.setAttribute('aria-pressed', root.classList.contains('bigger-text')); say('Bigger text '+(root.classList.contains('bigger-text')?'on':'off')); }
      if(k==='underline'){ root.classList.toggle('underline-links'); btn.setAttribute('aria-pressed', root.classList.contains('underline-links')); say('Underline links '+(root.classList.contains('underline-links')?'on':'off')); }
      if(k==='cb-safe'){ root.classList.toggle('cb-safe'); btn.setAttribute('aria-pressed', root.classList.contains('cb-safe')); say('Colorblind safe palette '+(root.classList.contains('cb-safe')?'on':'off')); }
      if(k==='motion'){ root.classList.toggle('reduce-motion'); btn.setAttribute('aria-pressed', !root.classList.contains('reduce-motion')); say('Motion '+(root.classList.contains('reduce-motion')?'reduced':'enabled')); }
    });
  });

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.documentElement.classList.add('reduce-motion');
  }
})();
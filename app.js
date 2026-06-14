
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
    });
  }
});

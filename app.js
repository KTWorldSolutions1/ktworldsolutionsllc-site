
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuButton.textContent = nav.classList.contains('open') ? 'Close' : 'Menu';
  });
}

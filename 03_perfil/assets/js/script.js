// Abre/fecha o menu no mobile
const hamburger = document.querySelector('.hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  const aberto = nav.classList.toggle('is-open');
  hamburger.setAttribute('aria-expanded', aberto);
});

// Fecha o menu ao clicar em um link
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', false);
  });
});

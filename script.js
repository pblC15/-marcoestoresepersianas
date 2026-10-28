// Menu de navegação em dispositivos móveis
const menuBtn = document.querySelector('#menuBtn');
const mobileNav = document.querySelector('#mobileNav');

menuBtn?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('hidden') === false;
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.textContent = open ? '×' : '☰';
});

mobileNav?.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.textContent = '☰';
  })
);

// Ano automático no rodapé
document.querySelector('#year').textContent = new Date().getFullYear();

// Galeria de fotografias ampliadas
const lightbox = document.querySelector('#lightbox');
const lightboxImg = document.querySelector('#lightboxImg');

document.querySelectorAll('[data-img]').forEach((b) =>
  b.addEventListener('click', () => {
    lightboxImg.src = b.dataset.img;
    lightbox.showModal();
  })
);

document.querySelector('#closeLightbox').addEventListener('click', () => lightbox.close());

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.close();
});

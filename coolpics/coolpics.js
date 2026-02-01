const pics = document.querySelectorAll('.cool-pic');

pics.forEach(pic => {
  pic.addEventListener('click', showFullSize);
});

function showFullSize(e) {
  const smallSrc = e.target.src;
  const bigSrc = smallSrc.replace('.jpg', '-large.jpg');

  const img = document.createElement('img');
  img.src = bigSrc;
  img.classList.add('fullsize');

  const closeBtn = document.createElement('span');
  closeBtn.textContent = 'x';
  closeBtn.classList.add('close-btn');

  closeBtn.addEventListener('click', () => {
    img.remove();
    closeBtn.remove();
  });

  document.body.appendChild(img);
  document.body.appendChild(closeBtn);
}
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  nav.classList.toggle('show');
}
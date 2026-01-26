
let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);


function changeTheme() {
  const current = selectElem.value;

  if (current === 'dark') {
    document.body.classList.add('dark');
    logo.src = 'logodark.png';
  } else if (current === 'light') {
    document.body.classList.remove('dark');
    logo.src = 'byui-logo-blue.webp';
  }
}
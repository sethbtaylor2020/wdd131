
let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'light') {
        document.body.classList.add('dark');
        const image = document.querySelector('img');
        image.setAttribute('src', 'byui-logo-blue.webp');
    }
    else if (current === 'dark') {
       document.body.classList.remove('dark');
        const image = document.querySelector('img');
        image.setAttribute('src', 'logodark.png');
    }  
}
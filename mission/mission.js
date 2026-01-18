
let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'light') {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
        const image = document.querySelector('img');
        image.setAttribute('src', 'byui-logo-blue.webp');
    }
    else if (current === 'dark') {
        document.body.style.backgroundColor = '#434343';
        document.body.style.color = '#ffffff';
        const image = document.querySelector('img');
        image.setAttribute('src', 'logodark.png');
    } 
    
}
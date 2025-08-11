const body = document.querySelector('body');
const header = document.querySelector('.header-image-switch');
const switchDarkLight = document.querySelector('.switch-dark-light');
const extensionListTitle = document.querySelector('.extension-list-title');
const toggles = document.querySelectorAll('.identifier');

function changeToDark(){
    body.classList.add('background-dark');
    header.classList.add('header-dark');
    switchDarkLight.classList.add('switch-dark-light-when-dark');
    extensionListTitle.classList.add('h1-dark');
    toggles.forEach( el => {
        el.classList.add('identifier-dark');
    });
    document.querySelectorAll('.card').forEach( el => {
        el.classList.add('card-dark');
    });
    document.querySelectorAll('.extension-name').forEach( el => {
        el.classList.add('h2-dark')
    });
    document.querySelectorAll('.extension-description').forEach( el => {
        el.classList.add('p-dark');
    });
    document.querySelectorAll('.extension-remove').forEach( el => {
        el.classList.add('button-remove-dark');
    });
}

export { changeToDark };
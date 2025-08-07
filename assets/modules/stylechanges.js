const body = document.querySelector('body');
const header = document.querySelector('.header-image-switch');
const switchDarkLight = document.querySelector('.switch-dark-light');
const extensionListTitle = document.querySelector('.extension-list-title');
const toggles = document.querySelectorAll('.identifier');
const cardDark = document.querySelectorAll('.card');
const cardTitle = document.querySelector('.extension-name');
const cardDescription = document.querySelector('.extension-description');
const cardRemoveButton = document.querySelector('.extension-remove');

function changeToDark(){
    body.classList.add('background-dark');
    header.classList.add('header-dark');
    switchDarkLight.classList.add('switch-dark-light-when-dark');
    extensionListTitle.classList.add('h1-dark');
    toggles.forEach( el => {
        el.classList.add('identifier-dark');
    });
    cardDark.forEach( el => {
        el.classList.add('card-dark');
    });
    cardTitle.classList.add('h2-dark');
    cardDescription.classList.add('p-dark');
    cardRemoveButton.classList.add('button-remove-dark');
}

export { changeToDark };
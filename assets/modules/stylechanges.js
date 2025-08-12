const body = document.querySelector('body');
const header = document.querySelector('.header-image-switch');
const switchDarkLight = document.querySelector('.switch-dark-light');
const logoLight = document.querySelector('.svg-logo-image');
const iconOfSwitch = document.querySelector('.image-sun');
const switchDarkLightInput = document.querySelector('.switch-dark-light-input');
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

function changeToLight(){
    body.classList.add('background-light');
    header.classList.add('header-light');
    logoLight.classList.add('svg-dark');
    iconOfSwitch.src = 'assets/images/icon-moon.svg';
    switchDarkLight.classList.add('switch-dark-light-when-light');
    extensionListTitle.classList.add('h1-light');
    toggles.forEach( el => {
        el.classList.add('identifier-light');
    });
    document.querySelectorAll('.card').forEach( el => {
        el.classList.add('card-light');
    });
    document.querySelectorAll('.extension-name').forEach( el => {
        el.classList.add('h2-light')
    });
    document.querySelectorAll('.extension-description').forEach( el => {
        el.classList.add('p-light');
    });
    document.querySelectorAll('.extension-remove').forEach( el => {
        el.classList.add('button-remove-light');
    });
}

export { changeToDark, changeToLight };
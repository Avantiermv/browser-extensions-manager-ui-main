const body = document.querySelector('body');
const header = document.querySelector('.header-image-switch');
const switchDarkLight = document.querySelector('.switch-dark-light');
const logoLight = document.querySelector('.svg-logo-image');
const iconOfSwitch = document.querySelector('.image-sun');
const switchDarkLightInput = document.querySelector('.switch-dark-light-input');
const switchDarkLightLabel = document.querySelector('.switch-dark-light');
const extensionListTitle = document.querySelector('.extension-list-title');
const toggles = document.querySelectorAll('.identifier');

const elements = {
    cards: document.querySelectorAll('.card'),
    extensionName: document.querySelectorAll('.extension-name'),
    extensionDescription: document.querySelectorAll('.extension-description'),
    extensionRemoveButtons: document.querySelectorAll('.extension-remove')
}

function toggleClasses(elements, classToAdd, classToRemove){
    elements.forEach(el => {
        el.classList.add(classToAdd);
        el.classList.remove(classToRemove);
    })
}

const themes = {
    dark: {
        add: {
            body: 'background-dark',
            header: 'header-dark',
            switch: 'switch-dark-light-when-dark',
            title: 'h1-dark',
            toggles: 'identifier-dark',
            cards: 'card-dark',
            names: 'h2-dark',
            descriptions: 'p-dark',
            removeButtons: 'button-remove-dark', 
        },
        remove: {
            body: 'background-light',
            header: 'header-light',
            switch: 'switch-dark-light-when-light',
            title: 'h1-light',
            toggles: 'identifier-light',
            cards: 'card-light',
            names: 'h2-light',
            descriptions: 'p-light',
            removeButtons: 'button-remove-light'
        }
    },
    light:{
        add: {
            body: 'background-light',
            header: 'header-light',
            switch: 'switch-dark-light-when-light',
            title: 'h1-light',
            toggles: 'identifier-light',
            cards: 'card-light',
            names: 'h2-light',
            descriptions: 'p-light',
            removeButtons: 'button-remove-light'
        },
        remove: {
            body: 'background-dark',
            header: 'header-dark',
            switch: 'switch-dark-light-when-dark',
            title: 'h1-dark',
            toggles: 'identifier-dark',
            cards: 'card-dark',
            names: 'h2-dark',
            descriptions: 'p-dark',
            removeButtons: 'button-remove-dark'
        }
    }
}

function updateDynamicElements() {
    elements.cards = document.querySelectorAll('.card');
    elements.extensionName = document.querySelectorAll('.extension-name');
    elements.extensionDescription = document.querySelectorAll('.extension-description');
    elements.extensionRemoveButtons = document.querySelectorAll('.extension-remove');
}


function changeToDark(){
    updateDynamicElements();

    switchDarkLightInput.checked = true;
    logoLight.classList.remove('svg-dark');
    body.classList.add(themes.dark.add.body);
    header.classList.add(themes.dark.add.header);
    switchDarkLight.classList.add(themes.dark.add.switch);
    extensionListTitle.classList.add(themes.dark.add.title);

    body.classList.remove(themes.dark.remove.body);
    header.classList.remove(themes.dark.remove.header);
    switchDarkLight.classList.remove(themes.dark.remove.switch);
    extensionListTitle.classList.remove(themes.dark.remove.title);

    toggleClasses(toggles, themes.dark.add.toggles, themes.dark.remove.toggles);
    toggleClasses(elements.cards, themes.dark.add.cards, themes.dark.remove.cards);
    toggleClasses(elements.extensionName, themes.dark.add.names, themes.dark.remove.names);
    toggleClasses(elements.extensionDescription, themes.dark.add.descriptions, themes.dark.remove.descriptions);
    toggleClasses(elements.extensionRemoveButtons, themes.dark.add.removeButtons, themes.dark.remove.removeButtons);

    iconOfSwitch.src = 'assets/images/icon-sun.svg';
}

function changeToLight(){
    updateDynamicElements();

    switchDarkLightInput.checked = false;
    logoLight.classList.add('svg-dark');
    body.classList.add(themes.light.add.body);
    header.classList.add(themes.light.add.header);
    switchDarkLight.classList.add(themes.light.add.switch);
    extensionListTitle.classList.add(themes.light.add.title);

    body.classList.remove(themes.light.remove.body);
    header.classList.remove(themes.light.remove.header);
    switchDarkLight.classList.remove(themes.light.remove.switch);
    extensionListTitle.classList.remove(themes.light.remove.title);

    toggleClasses(toggles, themes.light.add.toggles, themes.light.remove.toggles);
    toggleClasses(elements.cards, themes.light.add.cards, themes.light.remove.cards);
    toggleClasses(elements.extensionName, themes.light.add.names, themes.light.remove.names);
    toggleClasses(elements.extensionDescription, themes.light.add.descriptions, themes.light.remove.descriptions);
    toggleClasses(elements.extensionRemoveButtons, themes.light.add.removeButtons, themes.light.remove.removeButtons);

    iconOfSwitch.src = 'assets/images/icon-moon.svg';
}

function applyTransition(elements){
    elements.forEach(el => {
        el.classList.add('transition-class');
    })
}

switchDarkLightLabel.addEventListener('click', () => {
    if(switchDarkLightInput.checked){
        changeToLight();
    }else{
        changeToDark();
    }
});
export function changeMode(){
    changeToDark();
    applyTransition([
        body,
        header,
        switchDarkLight,
        extensionListTitle,
        ...toggles,
        ...elements.cards,
        ...elements.extensionName,
        ...elements.extensionDescription,
        ...elements.extensionRemoveButtons
    ]);
};


 
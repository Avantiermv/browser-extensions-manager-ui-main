import { extensionRemoveButton } from "./extensionsLogic.js";
import { allExtensions } from "./jsonLoader.js";

const extensions = document.querySelector('.extensions');

function createElements(extensionImage, extensionName, extensionDescription){
    const card = document.createElement('div');
    card.classList.add('card');

    const extensionIconImage = document.createElement('div');
    extensionIconImage.classList.add('extension-icon-image');
    const img = document.createElement('img');
    img.src = extensionImage;
    extensionIconImage.appendChild(img);

    const extensionInfo = document.createElement('div');
    extensionInfo.classList.add('extension-info');
    const h2 = document.createElement('h2');
    h2.classList.add('extension-name');
    h2.innerText = extensionName;
    const p = document.createElement('p');
    p.classList.add('extension-description');
    p.innerText = extensionDescription;
    extensionInfo.appendChild(h2);
    extensionInfo.appendChild(p);

    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    mainContent.appendChild(extensionIconImage);
    mainContent.appendChild(extensionInfo);

    const extensionActionToggles = document.createElement('div');
    extensionActionToggles.classList.add('extension-action-toggles');
    const buttonRemove = document.createElement('button');
    buttonRemove.classList.add('extension-remove');
    buttonRemove.textContent = "Remove";
    buttonRemove.addEventListener('click', () => {
        extensionRemoveButton(allExtensions);
    });

    const extensionSwitch = document.createElement('div');
    extensionSwitch.classList.add('extension-switch');

    const labelSwitch = document.createElement('label');
    labelSwitch.classList.add('switch');
    const inputSwitch = document.createElement('input');
    inputSwitch.type = 'checkbox';
    const spanSwitch = document.createElement('span');
    spanSwitch.classList.add('slider', 'round');

    labelSwitch.appendChild(inputSwitch);
    labelSwitch.appendChild(spanSwitch);

    extensionSwitch.appendChild(labelSwitch);

    extensionActionToggles.appendChild(buttonRemove);
    extensionActionToggles.appendChild(extensionSwitch);

    card.appendChild(mainContent);
    card.appendChild(extensionActionToggles);

    extensions.appendChild(card);
}

export { createElements };
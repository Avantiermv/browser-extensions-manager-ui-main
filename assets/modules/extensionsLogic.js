import { allExtensions, activeExtensions, inactiveExtensions } from "./jsonLoader.js";


function extensionRemoveButton(buttonElement){
    const card = buttonElement.closest('.card');
    if(card) card.style.display = 'none';
}

function isActive(extension){
    if(!extension.isActive){
        extension.isActive = true;
        pushExtensions(extension);
    }else{
        extension.isActive = false;
        pushExtensions(extension);
    }
}

function pushExtensions(extension){

    let activeIndex = activeExtensions.findIndex(ext => ext.name === extension.name);
    if(activeIndex !== -1){
        activeExtensions.splice(activeIndex, 1);
    }
    
    let inactiveIndex = inactiveExtensions.findIndex(ext => ext.name === extension.name);
    if(inactiveIndex !== -1){
        inactiveExtensions.splice(inactiveIndex, 1);
    }

    if(extension.isActive){
        activeExtensions.push(extension);
    }else{
        inactiveExtensions.push(extension);
    }
    console.log(activeExtensions);
    console.log(inactiveExtensions);
}

export { extensionRemoveButton, isActive }

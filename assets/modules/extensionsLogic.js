function extensionRemoveButton(buttonElement){
    const card = buttonElement.closest('.card');
    if(card) card.remove();
}

function isActive(extension){
    if(!extension.isActive){
        extension.isActive = true;
    }else{
        extension.isActive = false;
    }
}

export { extensionRemoveButton, isActive }

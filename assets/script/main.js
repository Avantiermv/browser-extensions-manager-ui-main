document.addEventListener('DOMContentLoaded', () => {

    const allExtensionToggle = document.querySelector('#all-ext');
    const activeExtensionToggle = document.querySelector('#active-ext');
    const inactiveExtensionToggle = document.querySelector('#inactive-ext');
    const switchLightDark = document.querySelector('.switch-light-dark'); 
    const extensionsdiv = document.querySelector('.extensions');

    let inactiveExtensions = [];
    let activeExtensions = [];
    let allExtensions = [];

    async function takeExtension(url) {
        try{
            const response = await fetch(url);
            const data = await response.json();

            data.forEach(extension => {
                createElements(extension);
                allExtensions.push(extension);

                if(extension.isActive === false){
                    inactiveExtensions.push(extension);
                }else{
                    activeExtensions.push(extension);
                }
            });
        }catch(e){
            console.error("Error:", e.message);
        }
    }
    takeExtension('assets/script/data.json');

    function createElements(extension){
        const extensionDiv = document.createElement('div');
        extensionDiv.classList.add('extension');
        extensionDiv.id = `divExtension`;

        const extensionContent = document.createElement('div');
        extensionContent.classList.add('extension-content');

        const divFavicon = document.createElement('div');
        divFavicon.classList.add('extension-favicon');
        const faviconImg = document.createElement('img');
        faviconImg.src = extension.logo;
        divFavicon.appendChild(faviconImg);

        const divText = document.createElement('div');
        divText.classList.add('extension-text');
        const divh2 = document.createElement('h2');
        divh2.innerText = extension.name;
        divh2.classList.add('extension-title');
        const divp = document.createElement('p');
        divp.innerText = extension.description;
        divp.classList.add('extension-info');
        divText.appendChild(divh2);
        divText.appendChild(divp);

        extensionContent.appendChild(divFavicon);
        extensionContent.appendChild(divText);

        const extensionActions = document.createElement('div');
        extensionActions.classList.add('extension-actions');

        const buttonRemove = document.createElement('button');
        buttonRemove.classList.add('extension-remove', 'toggles');
        buttonRemove.innerText = "Remove";
        buttonRemove.addEventListener('click', () => {
            remove(extensionDiv, extension);
        });

        const labelSwitch = document.createElement('label');
        labelSwitch.classList.add('switch');
        const inputCheckbox = document.createElement('input');
        inputCheckbox.type = 'checkbox';
        inputCheckbox.id = `inactiveActive-${extension.name}`;

        if(extension.isActive === true){
            inputCheckbox.checked = true;
        }

        inputCheckbox.addEventListener('click', () => {
            trackSwitch(extension);
        });

        const spanSlider = document.createElement('span');
        spanSlider.classList.add('slider', 'round');
        labelSwitch.appendChild(inputCheckbox);
        labelSwitch.appendChild(spanSlider);

        extensionActions.appendChild(buttonRemove);
        extensionActions.appendChild(labelSwitch);


        extensionDiv.appendChild(extensionContent);
        extensionDiv.appendChild(extensionActions);

        extensionsdiv.appendChild(extensionDiv);
    }

    function trackSwitch(extension){
        if(!extension.isActive){
            extension.isActive = true;
            pushExtensions(extension);
        }else{
            extension.isActive = false;
            pushExtensions(extension);
        }
    }

    function remove(extensionDiv, extension){
        extensionDiv.style.display = 'none';
        extension.isActive = false;
        pushExtensions(extension);
    }

    function pushExtensions(extension){

        inactiveExtensions = inactiveExtensions.filter(ext => ext.name !== extension.name);
        activeExtensions = activeExtensions.filter(ext => ext.name !== extension.name);

        if(extension.isActive === false){
            inactiveExtensions.push(extension);
        } 
        if(extension.isActive === true){
            activeExtensions.push(extension);
        }
    } 
    
    function showAll(){
        allExtensionToggle.classList.remove('colors');
        allExtensionToggle.classList.add('change-background');
        allExtensionToggle.addEventListener('click', () => {
            resetAll();
            apllyStyleToggles(allExtensionToggle);
            
        });
    }
    showAll();

    function showActives(){
        activeExtensionToggle.addEventListener('click', () => {
            resetAll();
            apllyStyleToggles(activeExtensionToggle);
            
        })
    }
    showActives();

    function showInactives(){
        inactiveExtensionToggle.addEventListener('click', () => {
            resetAll();
            apllyStyleToggles(inactiveExtensionToggle);
            
        })
    }
    showInactives();

    function apllyStyleToggles(element){
        element.classList.add('change-background');
        element.classList.remove('colors');
    }

    function resetAll(){
        [allExtensionToggle, activeExtensionToggle, inactiveExtensionToggle].forEach(element => {
            element.classList.remove('change-background');
            element.classList.add('colors');
        });
    }

    function toggleVisibility(extensions){
        
    }


});
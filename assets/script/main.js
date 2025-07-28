document.addEventListener('DOMContentLoaded', () => {

    const allExtensionToggle = document.querySelector('#all-ext');
    const activeExtensionToggle = document.querySelector('#active-ext');
    const inactiveExtensionToggle = document.querySelector('#inactive-ext');
    const toggles = document.querySelectorAll('.toggles');
    const switchLightDark = document.querySelector('.switch-light-dark'); 
    const extensionsdiv = document.querySelector('.extensions');

    const imgSwitch = document.querySelector('.img-switch');
    const body = document.body;

    let inactiveExtensions = [];
    let activeExtensions = [];
    let allExtensions = [];

    let allExtensionsElements = [];
    let activeExtensionsElements = [];
    let inactiveExtensionsElements = [];

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
            remove(extension, extensionDiv);
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
            trackSwitch(extension, extensionDiv);
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

        allExtensionsElements.push(extensionDiv);
        if(extension.isActive){
            activeExtensionsElements.push(extensionDiv);
        }else{
            inactiveExtensionsElements.push(extensionDiv);
        }
    }

    function trackSwitch(extension, extensionDiv){
        if(!extension.isActive){
            extension.isActive = true;
            pushExtensions(extension, extensionDiv);
        }else{
            extension.isActive = false;
            pushExtensions(extension, extensionDiv);
        }
    }

    function remove(extension, extensionDiv){
        extensionDiv.style.display = 'none';
        extension.isActive = false;
        pushExtensions(extension, extensionDiv);
    }

    function pushExtensions(extension, extensionDiv){

        inactiveExtensions = inactiveExtensions.filter(ext => ext.name !== extension.name);
        activeExtensions = activeExtensions.filter(ext => ext.name !== extension.name);
        inactiveExtensionsElements = inactiveExtensionsElements.filter(element => element !== extensionDiv);
        activeExtensionsElements = activeExtensionsElements.filter(element => element !== extensionDiv);

        if(extension.isActive){
            activeExtensions.push(extension);
            activeExtensionsElements.push(extensionDiv);
        }else{
            inactiveExtensions.push(extension);
            inactiveExtensionsElements.push(extensionDiv);
        }
    } 

    function showToggles(){
        allExtensionToggle.classList.remove('colors');
        allExtensionToggle.classList.add('change-toggle-style');
        toggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                resetAll();
                apllyStyleToggles(toggle);
                
                const typeToggle = toggle.dataset.type;

                if(typeToggle === 'all'){
                    showAll();
                }
                if(typeToggle === 'active'){
                    showActives();
                }
                if(typeToggle === 'inactive'){
                    showInactives();
                }
            });
        });
    }
    showToggles();

    function apllyStyleToggles(element){
        element.classList.add('change-toggle-style');
        element.classList.remove('colors');
    }

    function resetAll(){
        [allExtensionToggle, activeExtensionToggle, inactiveExtensionToggle].forEach(element => {
            element.classList.remove('change-toggle-style');
            element.classList.add('colors');
        });
    }

    function showAll(){
        activeExtensionsElements.forEach((ext) => {
            ext.style.display = 'none';
        });
        inactiveExtensionsElements.forEach((ext) => {
            ext.style.display = 'none';
        });
        allExtensionsElements.forEach((ext) => {
            ext.style.display = 'block';
        });
    }

    function showActives(){
        allExtensionsElements.forEach((ext) => {
            ext.style.display = 'none';
        });
        activeExtensionsElements.forEach((ext) => {
            ext.style.display = 'block';
        });
        inactiveExtensionsElements.forEach((ext) => {
            ext.style.display = 'none';
        });
    }

    function showInactives(){
        allExtensionsElements.forEach((ext) => {
            ext.style.display = 'none';
        });
        inactiveExtensionsElements.forEach((ext) => {
            ext.style.display = 'block';
        });
        activeExtensionsElements.forEach((ext) => {
            ext.style.display = 'none';
        });
    }

    switchLightDark.addEventListener('click', () => {
        const showingMoon = imgSwitch.src.includes('icon-moon.svg');
        imgSwitch.src = showingMoon ? 'assets/images/icon-sun.svg' : 'assets/images/icon-moon.svg';
        if(!showingMoon){
            body.classList.remove('body-background');
            body.classList.add('change-background-body');
        }else{
            body.classList.remove('change-background-body');
            body.classList.add('body-background');
        }
    });
});
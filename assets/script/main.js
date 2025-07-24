document.addEventListener('DOMContentLoaded', () => {

    const toggles = document.querySelectorAll('.toggles');
    const switchLightDark = document.querySelector('.switch-light-dark'); 
    const extensionsdiv = document.querySelector('.extensions');

    async function takeExtension(url) {
        try{
            const response = await fetch(url);
            const data = await response.json();

            console.log("Tamanho do json: ", data.length);

            data.forEach(extension => {
                createElements(extension);
            });

        }catch(e){
            console.error("Error:", e.message);
        }
    }
    takeExtension('assets/script/data.json');

    function trackSwitch(extension){
        if(!extension.isActive){
            console.log("Não estava ligado mas agora está");
            extension.isActive = true;

        }else{
            console.log("Estava ligado, mas agora não está");
            extension.isActive = false;
        }
    }

    function teste3(){
        toggles.addEventListener('click', () => {
            if(toggles.classList.contains('all-ext')){
                console.log("All");
            }else if(toggles.classList.contains('active-ext')){
                console.log("Active");
            }else{
                console.log("Inactive");
            }
        });
    }
    teste3();
    
    function createElements(extension){
        const extensionDiv = document.createElement('div');
        extensionDiv.classList.add('extension');

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
});
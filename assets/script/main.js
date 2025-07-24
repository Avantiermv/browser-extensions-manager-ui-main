document.addEventListener('DOMContentLoaded', () => {

    const allExtensions = document.querySelector('.all-ext');
    const inactiveExtensions = document.querySelector('.inactive-ext');
    const activeExtensions = document.querySelector('.active-ext');
    const switchLightDark = document.querySelector('.switch-light-dark'); 
    const extensionsdiv = document.querySelector('.extensions');

    async function takeExtension(url) {
        try{
            const response = await fetch(url);
            const data = await response.json();

            data.forEach(extension => {


                createElements(extension);

                if(extension.isActive === true){
                    const switchActiveDesactive = document.querySelector(`#inactiveActive-${extension.name}`);
                    switchActiveDesactive.checked = true;
                }
            });

        }catch(e){
            console.error("Error:", e.message);
        }
    }
    takeExtension('assets/script/data.json');

    function teste2(){
        
    }

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
document.addEventListener('DOMContentLoaded', () => {

    const allExtensions = document.querySelector('.all-ext');
    const inactiveExtensions = document.querySelector('.inactive-ext');
    const activeExtensions = document.querySelector('.active-ext');
    const switchLightDark = document.querySelector('.switch-light-dark');
    const switchActiveDesactive = document.querySelector('.check-inactive-active');

    async function takeExtension(url) {
        try{
            const response = await fetch(url);
            const data = await response.json();

            data.forEach(extension => {
                if(extension.isActive === true){
                    switchActiveDesactive.checked = true;
                }
            });
        }catch(e){
            console.error("Error:", e.message);
        }
    }
    takeExtension('assets/script/data.json');


    function createElements(logo, title, description){

    }
})
document.addEventListener('DOMContentLoaded', () => {

    const allExtensions = document.querySelector('.all-ext');
    const inactiveExtensions = document.querySelector('.inactive-ext');
    const activeExtensions = document.querySelector('.active-ext');
    
    fetch('assets/script/data.json')
        .then(response => response.json())
        .then(extensions => {

            extensions.forEach(extension => {
                
            })

        })
        .catch(e => {
            console.error("Error", e.status);
        });
})
import { createElements } from "./createElements.js";

async function takeExtensionInfo(url) {
    try{
        const reponse = await fetch(url);
        const data = await reponse.json();
        data.forEach(extension => {
            createElements(extension.logo, extension.name, extension.description);
        });
    }catch(e){
        console.error("ERROR: ", e);
    }
}

export { takeExtensionInfo };






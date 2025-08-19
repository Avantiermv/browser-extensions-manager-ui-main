import { createElements } from "./createElements.js";

export let allExtensions = [];

async function takeExtensionInfo(url) {
    try{
        const reponse = await fetch(url);
        const data = await reponse.json();
        data.forEach(extension => {
            createElements(extension);
            if(extension){
                allExtensions.push(extension);
            }
        });
    }catch(e){
        console.error("ERROR: ", e);
    }
}

export { takeExtensionInfo };






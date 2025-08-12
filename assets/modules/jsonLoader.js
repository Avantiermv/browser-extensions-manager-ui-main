import { createElements } from "./createElements.js";

let allExtensiosn =[];
let activeExtensions = [];
let inactiveExtensions = [];

async function takeExtensionInfo(url) {
    try{
        const reponse = await fetch(url);
        const data = await reponse.json();
        data.forEach(extension => {
            createElements(extension.logo, extension.name, extension.description);
            if(extension){
                allExtensiosn.push(extension);
            }
            if(extension.isActive){
                activeExtensions.push(extension);
            }else{
                inactiveExtensions.push(extension);
            }
        });
        console.log(allExtensiosn);
        console.log(activeExtensions);
        console.log(inactiveExtensions);
    }catch(e){
        console.error("ERROR: ", e);
    }
}

export { takeExtensionInfo };






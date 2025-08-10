import { changeToDark } from "../modules/stylechanges.js";
import { takeExtensionInfo } from "../modules/jsonLoader.js";


document.addEventListener('DOMContentLoaded', () => {
    
   changeToDark();
   takeExtensionInfo('assets/scripts/data.json');
});
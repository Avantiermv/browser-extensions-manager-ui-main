import { changeToDark } from "../modules/stylechanges.js";
import { takeExtensionInfo } from "../modules/jsonLoader.js";

document.addEventListener('DOMContentLoaded', async () => {
   await takeExtensionInfo('assets/scripts/data.json');
   changeToDark();
});
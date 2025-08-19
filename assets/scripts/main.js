import { changeMode } from "../modules/stylechanges.js";
import { takeExtensionInfo } from "../modules/jsonLoader.js";
import { allExtensions } from "../modules/jsonLoader.js";

document.addEventListener('DOMContentLoaded', async () => {
   await takeExtensionInfo('assets/scripts/data.json');
   changeMode();

   const toggleButtons = document.querySelectorAll('.identifier');
   
   toggleButtons.forEach(toggle => {
      const card = document.querySelectorAll('.card');
   
      toggle.addEventListener('click', () => {
      const typetoggle = toggle.dataset.type;
      if(typetoggle === 'all'){
         card.forEach(card => {
            card.classList.remove('hidden');
            card.classList.add('visible');
         });
      }
   
      if(typetoggle === 'active'){
         allExtensions.forEach(ex => {
            if(ex.isActive){
               console.log("Esses são os ativos: ", ex);
            }
         });
      }
   
      if(typetoggle === 'inactive'){
         allExtensions.forEach(ex => {
            if(!ex.isActive){
               console.log("Esses são os inativos: ", ex);
            }
         });
      }
      });
   });    
});
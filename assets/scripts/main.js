import { changeMode } from "../modules/stylechanges.js";
import { takeExtensionInfo } from "../modules/jsonLoader.js";
import { allExtensions } from "../modules/jsonLoader.js";


document.addEventListener('DOMContentLoaded', async () => {
   await takeExtensionInfo('assets/scripts/data.json');
   changeMode();

   const toggleButtons = document.querySelectorAll('.identifier');
   
   toggleButtons.forEach(toggle => {
      toggle.addEventListener('click', () => {
      const typetoggle = toggle.dataset.type;
      if(typetoggle === 'all'){
         toggle.classList.add('red-toggle-background');
         document.querySelectorAll('.card').forEach(card => {
            card.classList.remove('hidden');
            card.classList.add('visible');
         });
      }
   
      if(typetoggle === 'active'){
         allExtensions.forEach(extension => {
            const card = document.querySelector(`.card[data-id="${extension.id}"]`);
            if(card){
               if(extension.isActive){
                  card.classList.remove('hidden');
                  card.classList.add('visible');
               }else{
                  card.classList.remove('visible');
                  card.classList.add('hidden');
               }
            }
         });
      }
   
      if(typetoggle === 'inactive'){
         allExtensions.forEach(extension => {
            const card = document.querySelector(`.card[data-id="${extension.id}"]`);
            if(card){
               if(!extension.isActive){
                  card.classList.remove('hidden');
                  card.classList.add('visible');
               }else{
                  card.classList.remove('visible');
                  card.classList.add('hidden');
               }
            }
         });
      }
      });
   });    
});
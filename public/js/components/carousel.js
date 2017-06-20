'use strict'

 const carousel = (update) =>{
   const bntSignUp = $("<button>Registrate</button>");
   bntSignUp.on("click",function(event) {
    state.selectedYape = 1;
    update();
   })
   return bntSignUp;
 }

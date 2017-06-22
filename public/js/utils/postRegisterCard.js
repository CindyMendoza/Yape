'use strict'
 const postRegisterCard = (phone,cardNumber,cardMonth,cardYear,cardPassword)=>{
   $.post("api/registerCard",
   {"phone":phone,"cardNumber":cardNumber,"cardMonth":cardMonth,"cardYear":cardYear,"cardPassword":cardPassword},
   (e)=>{
      if(e.success == false){
        alert(e.message);
      }else{
        alert(e.message);
      }
   },
   "json"
 );
 }

'use strict'
  // let drn;
 const postRegisterCard = (phone,cardNumber,cardMonth,cardYear,cardPassword)=>{
   $.post("api/registerCard",
   {"phone":phone,"cardNumber":cardNumber,"cardMonth":cardMonth,"cardYear":cardYear,"cardPassword":cardPassword},
   (e)=>{
      // drn = e.data.code;
      // return alert(drn);
      return console.log(e);
   },
   "json"
 );
 // return drn;
 }

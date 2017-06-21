'use strict'
  // let drn;
 const postResendCode = (phone)=>{
   $.post("api/resendCode",
   {"phone":phone},
   (e)=>{
      // drn = e.data.code;
      // return alert(drn);
      return console.log(e);
   },
   "json"
 );
 // return drn;
 }

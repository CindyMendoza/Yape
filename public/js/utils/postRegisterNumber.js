'use strict'
  // let drn;
 const postRegisterNumber = (phone,terms)=>{
   $.post("api/registerNumber",
   {"phone":phone,"terms":terms},
   (e)=>{
      // drn = e.data.code;
      // return alert(drn);
      return console.log(e);
   },
   "json"
 );
 // return drn;
 }

'use strict'
 const postRegisterNumber = (n,t)=>{
   $.post("api/registerNumber",
   {"phone":n,"terms":t},
   (e)=>{
     console.log(e);
   },
   "json"
 );
 }

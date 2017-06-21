'use strict'
 const postRegisterNumber = (phonex,terms)=>{
   console.log(phonex);
   $.post("api/registerNumber",
   {"phone":phonex.val(),"terms":terms},
   (e)=>{
      state.resRegisterNumber = e;
      return console.log(e.success,e.message,e.data.phone,e.data.terms,e.data.code);
   },
   "json"
 );
 }

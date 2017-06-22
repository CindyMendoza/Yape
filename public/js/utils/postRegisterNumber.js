'use strict'
 const postRegisterNumber = (phone,terms)=>{
   $.post("api/registerNumber",
   {"phone":phone,"terms":terms},
   (e)=>{
     state.resRegisterNumber = e
     if(e.success === null){
       console.log(e.success,e.message);
     }else{
       console.log(e.success,e.message);
     }
      return  console.log(state.resRegisterNumber);
        // console.log(state.resRegisterNumber.success,state.resRegisterNumber.message,state.resRegisterNumber.data.phone,state.resRegisterNumber.data.terms,state.resRegisterNumber.data.code);
   },
   "json"
 );
 };

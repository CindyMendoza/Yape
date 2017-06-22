'use strict'
 const postRegisterNumber = (phone,terms,update)=>{
   $.post("api/registerNumber",
   {"phone":phone,"terms":terms},
   (e)=>{
     if(e.success === false){
       console.log(e.success,e.message);
       alert(e.message);
     }else{
       console.log(e.success,e.message,e.data.code);
       state.reqRegisterNumber = e;
       alert(e.message);
       alert("Tu codigo es: " + e.data.code);
       state.selectedYape = 2;
       update();
       console.log(state.reqRegisterNumber);

     }
   },
   "json"
 );
 };

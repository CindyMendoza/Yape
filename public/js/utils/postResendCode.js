'use strict'
 const postResendCode = (phone)=>{
   $.post("api/resendCode",
   {"phone":phone},
   (e)=>{
     if(e.success === false){
       alert(e.message);
     }else{
       state.reqResendCode = e;
       state.reqRegisterNumber.data.code = e.data;
       alert(e.message);
       alert("Tu nuevo codigo es: " + e.data);
       console.log(state.reqResendCode);
     }

   },
   "json"
 );
 }

'use strict'
  // let drn;
 const postCreateUser = (phone,name,email,password)=>{
   $.post("api/createUser",
   {"phone":phone,"name":name,"email":email,"password":password},
   (e)=>{
      // drn = e.data.code;
      // return alert(drn);
      state.resCreateUser = e;
      return console.log(e);
   },
   "json"
 );
 // return drn;
 }

'use strict'
const enterYourCode = (update)=>{
  const divCode = $("<div></div>");
  const formCode = $("<form></form>");
  const h4 = $("<h4><strong>Ahora ingresa tu codigo<strong></h4>");
  const txt = $("<p>Enviamos un SMS con un codigo de validacion al numero:</p>");
  const inputCode = $("<input></input>");
  formCode.append(h4);
  formCode.append(txt);
  formCode.append(inputCode);
  divCode.append(formCode);
  inputCode.on("keypress", function(event) {
    event.preventDefault();
    // if(event.keycode == 13){
      postResendCode()
      state.selectedYape = 3;
      update();
      console.log("entre sin if");
    //   console.log("entre al if del keycode");
    // }else{
    //   console.log("no valida keycode");
    // }
  });
  return divCode;

}
